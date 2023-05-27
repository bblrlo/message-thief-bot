import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

export default async function webhook(request: NextApiRequest, response: NextApiResponse){
    if (request.method !== 'POST') { return response.status(405)}
    
    const prisma = new PrismaClient();
    try{
        const {id: chat_id, type: chat_type} = request.body.message.chat;
        const {text: message, date: date} = request.body.message;
        const {id: sender_id } = request.body.message.from;
        if (request.body.message.text === "/showmetreasure"){
            await replyMessage(chat_id, `${process.env.TREASURE_LINK}`,request.body.message.message_id);
        }
        const new_treasure = await prisma.treasure.create({
            data: {
                chat_id: chat_id.toString(),
                chat_type: chat_type,
                sender_id: sender_id.toString(),
                message: message,
                date: date
            }
        });
    response.status(200).json(new_treasure.id);
    }catch(err){
        await sendMessage(`${process.env.DEBUG_CHAT_ID}`, JSON.stringify(request.body));
        
        response.status(200).json({body: request.body});
    }
    async function sendMessage(chat_id: String, text: String){
        const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
        const sendMessage_URL = `${BASE_URL}/sendMessage`;
        const data = await axios.post(
            sendMessage_URL,
            {
                chat_id: chat_id, text: text
            }).catch(error => console.log(error));
    }
    async function replyMessage(chat_id: String, text: String, reply_to_message_id: String){
        const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
        const sendMessage_URL = `${BASE_URL}/sendMessage`;
        const data = await axios.post(
            sendMessage_URL,
            {
                chat_id: chat_id, text: text, reply_to_message_id: reply_to_message_id
            }).catch(error => console.log(error));
    }
}