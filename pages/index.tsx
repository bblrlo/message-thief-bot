
import { PrismaClient, Treasure } from '@prisma/client';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import type { Treasures } from '../lib/types';
JSON.stringify(this, (key, value) => typeof value === 'bigint' ? value.toString() : value);

export default function Home({
    data
  } : InferGetStaticPropsType<typeof getStaticProps>) {
      const {treasures} = data
    
  return (
    <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Chat ID</th>
          <th scope="col">Chat Type</th>
          <th scope="col">Sender ID</th>
          <th scope="col">Message</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {treasures.map((treasure) => (
          <tr key={treasure.id}>
            <td scope="row">{treasure.id}</td>
            <td>{treasure.chat_id.toString()}</td>
            <td>{treasure.chat_type}</td>
            <td>{treasure.sender_id.toString()}</td>
            <td>{treasure.message}</td>
            <td>{treasure.date.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext){
  const prisma = new PrismaClient();
  let data = {treasures: [] as Treasures}
  try{
    
    const prisma= new PrismaClient();
    const trs = (await prisma.treasure.findMany());
    data.treasures = trs;
  }catch(e){
    console.error(e);
  }
  return {
    props: {
      data
    }
  }
}