// // pages/api/posts.js
// import prisma  from '../../../lib/prisma';
import { PrismaClient } from '@prisma/client'

export async function GET(request: Request) {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(request.url)
    const term = searchParams.get('term')
    // const { skip = 0, take = 10 } = request; // default to 10 posts at a time
    let posts = null
    try {
        posts = await prisma.radios.findMany({
            take: 5,
            where: {
                title: {
                    search: term
                }
            },
            include: {
                genres: true,
                country: true,
                city: true,
                language: true,
                state: true,
                region: true,
            },
            orderBy: {
                listens: "desc"
            },
        });

        return new Response(JSON.stringify(posts), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Unable to fetch posts" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    // const product = await res.json()

    // return Response.json({ msg: skip })
}