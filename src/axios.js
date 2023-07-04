// openai.js
import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = "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";

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];

const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(prompt, message) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}\n\nUser: ${message}`,
        temperature: 0.9,
        max_tokens: 80,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    });
    return response.data.choices[0].text;
}
