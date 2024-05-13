// // pages/api/posts.js
import { PrismaClient } from '@prisma/client'
import path from 'path';
import fs from 'fs/promises';
export async function GET(request: Request) {

const { searchParams } = new URL(request.url)

const country = searchParams.get('country')

  const filePath = path.join(process.cwd(), 'data', 'Africa', 'countries', country + '.json');
  let data;
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    data = JSON.parse(fileContents);
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error loading JSON file:', error);
    // Handle the error appropriately
    return new Response(JSON.stringify({ error: "Unable to fetch posts" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}