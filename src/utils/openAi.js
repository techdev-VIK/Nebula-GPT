import OpenAI from 'openai';

// const openAI = new OpenAI({
//   apiKey: import.meta.env.VITE_API_KEY, 
//   dangerouslyAllowBrowser: true,
// });

// export default openAI;


const apiKey = import.meta.env.VITE_API_KEY;

export async function callOpenAI(prompt) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    })
  });

  const data = await res.json();
  return data;
}