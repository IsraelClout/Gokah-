export default async function handler(req, res) {
  const BYTEZ_API_KEY = process.env.BYTEZ_API_KEY;

  if(req.method === 'POST' && req.headers['content-type']?.includes('multipart/form-data')){
    // STT - Speech to Text
    const formData = await req.formData();
    const audio = formData.get('audio');

    const bytezForm = new FormData();
    bytezForm.append('file', audio, 'audio.webm');
    bytezForm.append('model', 'whisper-large-v3');

    const response = await fetch("https://api.bytez.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {"Authorization": `Bearer ${BYTEZ_API_KEY}`},
      body: bytezForm
    });
    const data = await response.json();
    return res.json({text: data.text});
  }

  const {action, prompt, lang} = req.body;
  const langName = {en:"English", ak:"Twi", ga:"Ga", ee:"Ewe", ha:"Hausa"}[lang];

  if(action === "chat"){
    const response = await fetch("https://api.bytez.com/v1/models/meta-llama-3-8b-instruct/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${BYTEZ_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `You are Gokah, a helpful AI from Ghana. Reply ONLY in ${langName}. Be brief.\nUser: ${prompt}\nGokah:`,
        max_tokens: 200
      })
    });
    const data = await response.json();
    return res.json({text: data.choices[0].text.trim()});
  }

  if(action === "tts"){
    const response = await fetch("https://api.bytez.com/v1/models/coqui-xtts-v2/tts", {
      method: "POST",
      headers: { "Authorization": `Bearer ${BYTEZ_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ text: prompt, language: lang, speaker: "Female Speaker 1" })
    });
    const buffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'audio/wav');
    return res.send(Buffer.from(buffer));
  }
}
