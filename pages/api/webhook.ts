import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default function webhook(request: NextApiRequest, response: NextApiResponse){
    const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
    //const BASE_URL = `https://api.telegram.org/bot5762001889:AAEvdXPp40capARcQkUqNEEOUnK2yA_oTk0`;
    try{
        const chat_id = request.body.chat.id;
        const message = request.body.text;
         axios.post(`${BASE_URL}/sendMessage`,
            {chat_id: "339121864" , text: JSON.stringify(request.body)}, 
            {headers: {'Content-Type': 'application/json'}});
         axios.post(`${BASE_URL}/sendMessage`,
            {chat_id: chat_id , text: message}, 
            {headers: {'Content-Type': 'application/json'}})
            .catch(function (error){console.log(error)});
        response.status(200).json({chat:chat_id});
    }catch(error){
        
        response.status(200).json({body: request.body, error: error});
    }
    
}