// // pages/api/posts.js
import { PrismaClient } from '@prisma/client'
import path from 'path';
import fs from 'fs/promises';
export async function GET(request: Request) {

const { searchParams } = new URL(request.url)

const region = searchParams.get('region')
const prisma = new PrismaClient()

const data = await prisma.radios.findMany({
  where: {
    region: {
      some: {
        name: capitalizeString(region)
      }
    }
  },
  select: {
    country: true,
    state: true,
    city: true
  }
})

  function capitalizeString(input: string) {
    return input
      .split('_')                    // Split the string into words based on '_'
      .map(word =>                   // Map each word to transform it
        word.charAt(0).toUpperCase() // Convert the first character to uppercase
        + word.slice(1).toLowerCase() // Convert the rest of the word to lowercase
      )
      .join(' ');                    // Join the words back into a single string with spaces
  }

  let result = capitalizeString("south_africa");
  console.log(result); // Outputs: "South Africa"


  try {
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error loading JSON file:', error);
    // Handle the error appropriately
    return new Response(JSON.stringify({ error: "Unable to fetch posts" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}