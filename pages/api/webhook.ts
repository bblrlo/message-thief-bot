import { NextApiRequest, NextApiResponse } from 'next';

export default function webhook(request: NextApiRequest, response: NextApiResponse){
    response.status(200).json({
        body: request.body,
        query: request.query,
        cookies: request.cookies,
        env: process.env.BOT_TOKEN,
    })
}