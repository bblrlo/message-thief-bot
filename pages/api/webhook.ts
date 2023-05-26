import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default function webhook(request: NextApiRequest, response: NextApiResponse){
    const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
    const sendMessage_URL = `${BASE_URL}/sendMessage`
    try{
        const chat_id = request.body.result.chat.id;
        const message = request.body.result.text;
        
         axios.post(sendMessage_URL,
            {chat_id: chat_id , text: message}, 
            {headers: {'Content-Type': 'application/json'}})
            .then(function (response) {
                console.log(response);
              })
            .catch(function (error){console.log(error)});
        response.status(200).json({chat:chat_id,message: message, url: BASE_URL});
    }catch(error){
        
        response.status(200).json({body: request.body, error: error});
    }
    
}