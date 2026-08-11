const BYTEZ_API_KEY = "18d2124c4f8c445136dc2860e6ed9041";

const API = {
  // 1. AI Brain: Llama 3
  async askGokah(prompt, langCode){
    const langName = {en:"English", ak:"Twi", ga:"Ga", ee:"Ewe", ha:"Hausa"}[langCode];
    try{
      const res = await fetch("https://api.bytez.com/v1/models/meta-llama-3-8b-instruct/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${BYTEZ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: `You are Gokah, a helpful AI assistant from Ghana. Reply ONLY in ${langName}. Keep it short, friendly, and helpful.\nUser: ${prompt}\nGokah:`,
          max_tokens: 200,
          temperature: 0.7
        })
      });
      const data = await res.json();
      return data.choices[0].text.trim();
    }catch(e){
      return "Sorry, I couldn't reach my brain.";
    }
  },

  // 2. Text to Speech: XTTS v2 for Ghanaian languages
  async speakText(text, langCode){
    try{
      const res = await fetch("https://api.bytez.com/v1/models/coqui-xtts-v2/tts", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${BYTEZ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          language: langCode, // ak, ga, ee, ha, en
          speaker: "Female Speaker 1"
        })
      });
      const blob = await res.blob();
      return URL.createObjectURL(blob);
    }catch(e){
      console.error("TTS Error:", e);
      return null;
    }
  },

  // 3. Speech to Text: Whisper
  async transcribeAudio(audioBlob){
    const form = new FormData();
    form.append("file", audioBlob, "audio.wav");
    form.append("model", "whisper-large-v3");

    try{
      const res = await fetch("https://api.bytez.com/v1/audio/transcriptions", {
        method: "POST",
        headers: {"Authorization": `Bearer ${BYTEZ_API_KEY}`},
        body: form
      });
      const data = await res.json();
      return data.text;
    }catch(e){
      return "";
    }
  }
}
