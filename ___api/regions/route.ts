// // pages/api/posts.js
// import prisma  from '../../../lib/prisma';
import { PrismaClient } from '@prisma/client'

export async function GET(request: Request) {
    const prisma = new PrismaClient();
    let posts = null
    try {
        posts = await prisma.regions.findMany();

        return new Response(JSON.stringify(posts), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Unable to fetch posts" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    // const product = await res.json()

    // return Response.json({ msg: skip })
}