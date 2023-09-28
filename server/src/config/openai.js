import OpenAI from "openai";

module.exports = class openai{
    static configuration(){
        const openai = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
          return new openai(configuration)
    }
    static textCompletion({prompt}) {
        return{
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}
