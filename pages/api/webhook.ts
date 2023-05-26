import { NextApiRequest, NextApiResponse } from 'next';
import {TelegramBot} from 'node-telegram-bot-api'

export default async function webhook(request: NextApiRequest, response: NextApiResponse){
    const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
    const { chat: { id }, text } = request.body.message;
    const BODY = JSON.stringify({chat_id: id, text: text});
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
    await bot.sendMessage(id,BODY);
    console.log(BODY);
    response.status(200);
}