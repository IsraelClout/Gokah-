const micBtn = document.getElementById('micBtn');
const sendBtn = document.getElementById('sendBtn');
const textInput = document.getElementById('textInput');
const status = document.getElementById('status');
const chatLog = document.getElementById('chatLog');
const langSelect = document.getElementById('language');
const audioPlayer = document.getElementById('audioPlayer');

let mediaRecorder;
let audioChunks = [];
let isRecording = false;

// Setup Mic
navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
  mediaRecorder.onstop = handleVoiceInput;
});

micBtn.onclick = () => {
  if(isRecording){
    mediaRecorder.stop();
    micBtn.classList.remove('recording');
    status.innerText = "Processing...";
    isRecording = false;
  } else {
    audioChunks = [];
    mediaRecorder.start();
    micBtn.classList.add('recording');
    status.innerText = "Listening...";
    isRecording = true;
  }
}

// 1. VOICE TO TEXT TO VOICE
async function handleVoiceInput(){
  const audioBlob = new Blob(audioChunks, {type: 'audio/webm'});
  const userText = await API.speechToText(audioBlob);
  if(!userText) return status.innerText = "Couldn't hear you";

  await processUserInput(userText);
}

// 2. TEXT TO VOICE
sendBtn.onclick = () => {
  const userText = textInput.value.trim();
  if(!userText) return;
  processUserInput(userText);
  textInput.value = "";
}

async function processUserInput(userText){
  const lang = langSelect.value;
  addMessage("You", userText, "user");
  status.innerText = "Gokah is thinking...";

  const aiReply = await API.chat(userText, lang);
  addMessage("Gokah", aiReply, "ai");

  status.innerText = "Speaking...";
  const audioUrl = await API.textToSpeech(aiReply, lang); // AUTO VOICE OUTPUT

  audioPlayer.src = audioUrl;
  audioPlayer.play();
  audioPlayer.onended = () => status.innerText = "Tap to Talk or Type";
}

function addMessage(sender, text, type){
  const div = document.createElement('div');
  div.className = `chat-message ${type}`;
  div.innerHTML = `<b>${sender}:</b> ${text}`;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}
