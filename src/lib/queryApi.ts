import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  return await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => {
      return `Chat GPT was unable to find an answer for that. Please try again. (Error: ${err}}`;
    });
};

export default query;
