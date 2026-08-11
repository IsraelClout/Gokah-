// All API calls go through our secure Vercel backend
const API = {
  async chat(prompt, lang){
    const res = await fetch("/api/gokah", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({action: "chat", prompt, lang})
    });
    const data = await res.json();
    return data.text;
  },

  async textToSpeech(text, lang){
    const res = await fetch("/api/gokah", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({action: "tts", prompt: text, lang})
    });
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  },

  async speechToText(audioBlob){
    const form = new FormData();
    form.append("audio", audioBlob);
    form.append("action", "stt");

    const res = await fetch("/api/gokah", {method: "POST", body: form});
    const data = await res.json();
    return data.text;
  }
}
