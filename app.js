const micBtn = document.getElementById('micBtn');
const status = document.getElementById('status');
const chatLog = document.getElementById('chatLog');
const langSelect = document.getElementById('language');
const audioPlayer = document.getElementById('audioPlayer');

let mediaRecorder;
let audioChunks = [];
let isRecording = false;

// Use MediaRecorder for better audio quality to send to Whisper
navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

  mediaRecorder.onstop = async () => {
    const audioBlob = new Blob(audioChunks, {type: 'audio/wav'});
    audioChunks = [];

    status.innerText = "Transcribing...";
    const userText = await API.transcribeAudio(audioBlob);

    if(!userText) {status.innerText = "Couldn't hear you. Try again"; return;}

    addMessage("You", userText, "user");
    status.innerText = "Gokah is thinking...";

    const lang = langSelect.value;
    const aiReply = await API.askGokah(userText, lang);
    addMessage("Gokah", aiReply, "ai");

    status.innerText = "Speaking...";
    const audioUrl = await API.speakText(aiReply, lang); // Auto voice output

    if(audioUrl){
      audioPlayer.src = audioUrl;
      audioPlayer.play();
      audioPlayer.onended = () => status.innerText = "Tap and Speak";
    }
  }
});

micBtn.onclick = () => {
  if(isRecording){
    mediaRecorder.stop();
    micBtn.classList.remove('recording');
    isRecording = false;
  } else {
    mediaRecorder.start();
    micBtn.classList.add('recording');
    status.innerText = "Listening...";
    isRecording = true;
  }
}

function addMessage(sender, text, type){
  const div = document.createElement('div');
  div.className = `chat-message ${type}`;
  div.innerHTML = `<b>${sender}:</b> ${text}`;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}
