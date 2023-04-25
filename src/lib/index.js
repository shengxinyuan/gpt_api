import { ChatGPTAPI } from 'chatgpt'

let chatGptClient;

async function askChat({ question, conversationId, parentMessageId }) {
  if (!chatGptClient) {
    chatGptClient = new ChatGPTAPI({
      apiKey: ''
    });

  }
  if (!question) {
    return {
      response: '你好'
    }
  }
  console.log("请求GPT", question);
  const params = {};
  if (conversationId) {
    params.conversationId = conversationId
  }
  if (parentMessageId) {
    params.parentMessageId = parentMessageId
  }
  return await chatGptClient.sendMessage(question, params)
}

export default async function (ctx) {
  const { question, conversationId, parentMessageId } = ctx.request.body;
  const res = await askChat({
    question,
    conversationId,
    parentMessageId
  });
  console.log("GPT返回", res);
  return res;
}