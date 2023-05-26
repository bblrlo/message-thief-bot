import { NextApiRequest, NextApiResponse } from 'next';


export default async function webhook(request: NextApiRequest, response: NextApiResponse){
    const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
    const { chat: { id }, text } = request.body.message;
    const BODY = JSON.stringify({chat_id: id, text: text});
    console.error(request.body);
    response.status(200);
}