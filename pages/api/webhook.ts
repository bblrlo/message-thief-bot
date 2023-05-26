import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default function webhook(request: NextApiRequest, response: NextApiResponse){
    const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
    const chat_id = request.body.result.chat.id;
    const message = request.body.result.text;
     axios.post(`${BASE_URL}/sendMessage`,
        {chat_id: "339121864" , text: request}, 
        {headers: {'Content-Type': 'application/json'}})
        .catch(function (error){console.log(error)});
     axios.post(`${BASE_URL}/sendMessage`,
        {chat_id: chat_id , text: message}, 
        {headers: {'Content-Type': 'application/json'}})
        .catch(function (error){console.log(error)});
    response.status(200);
}