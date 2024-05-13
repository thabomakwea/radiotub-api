// // pages/api/posts.js
import { PrismaClient } from '@prisma/client'

export async function GET(request: Request) {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(request.url)
    const skip = searchParams.get('skip')
    const take = searchParams.get('take')
    const letter = searchParams.get('letter')
    // const { skip = 0, take = 10 } = request; // default to 10 posts at a time
    let posts = null
    try {
        posts = await prisma.countries.findMany({
            skip: parseInt(skip, 10),
            take: parseInt(take, 10),
            where: {
                name: {
                    startsWith: String(letter),
                }
            },
            orderBy: {
                name: "desc"
            },
        });

        return new Response(JSON.stringify(posts), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Unable to fetch posts" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    // const product = await res.json()

    // return Response.json({ msg: skip })
}