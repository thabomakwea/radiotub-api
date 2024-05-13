// // pages/api/posts.js
import { PrismaClient } from '@prisma/client'
import path from 'path';
import fs from 'fs/promises';
import prisma from "@/lib/prisma";

export async function GET(request: Request) {

const { searchParams } = new URL(request.url)

const region = searchParams.get('region')


  const data = await prisma.radios.findMany({
    select: {
      radio_id: true,
    },
    where: {
      region: {
        some: {
          name: region
        }
      }
    }
  })

  try {
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error loading JSON file:', error);
    // Handle the error appropriately
    return new Response(JSON.stringify({ error: "Unable to fetch posts" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}