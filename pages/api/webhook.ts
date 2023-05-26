import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

export default async function webhook(request: NextApiRequest, response: NextApiResponse){
    const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
    const sendMessage_URL = `${BASE_URL}/sendMessage`;
    const prisma = new PrismaClient();
    try{
        const {id: chat_id, type: chat_type} = request.body.result.chat;
        const message = request.body.result.text;
        const {username: sender } = request.body.result.from;
        const user = await prisma.treasure.create({
            data: {
                chat_id: chat_id,
                chat_type: chat_type,
                sender: sender,
                message: message
            }
        });
        const {data} = await axios.post(sendMessage_URL,
            {chat_id: chat_id , text: message}, 
            {headers: {'Content-Type': 'application/json'}});
            
        response.status(200);
    }catch(error){
        
        response.status(200).json({body: request.body, error: error});
    }
    
}