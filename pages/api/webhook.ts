import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function webhook(request: NextApiRequest, response: NextApiResponse){
    const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
    const chat_id = request.body.message.chat.id;    
    await axios.post(`${BASE_URL}/sendMessage`,
        {chat_id: chat_id, text: "Hello"}, 
        {headers: {'Content-Type': 'application/json'}})
        .catch(function (error){console.log(error)});
    response.status(200);
}