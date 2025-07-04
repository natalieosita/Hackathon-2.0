const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAIAPIKEY,
});

const openai = new OpenAIApi(config);

module.exports = async function runAI(profile) {
  const { name, skills, goals } = profile;

  const gigPrompt = `
You're a career strategist AI. Suggest 3 tailored freelance gigs for:
Name: ${name}
Skills: ${skills}
Goals: ${goals}
Respond as a numbered list with brief explanations.
  `;

  const tipPrompt = `Give a one-line freelance productivity tip for someone with goals: ${goals}`;

  try {
    const [gigRes, tipRes] = await Promise.all([
      openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: gigPrompt }],
      }),
      openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: tipPrompt }],
      }),
    ]);

    return {
      gigs: gigRes.data.choices[0].message.content,
      tip: tipRes.data.choices[0].message.content,
    };
  } catch (error) {
    console.error('AI Service Error:', error.message);
    throw new Error('Failed to generate AI suggestions');
  }
};