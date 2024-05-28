import { Prisma, PrismaClient } from '@prisma/client'
import cors from 'cors'; // Import the 'cors' package

import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors());


app.get('/api/v1/cities', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, city } = req.query;

    try {
        const posts = await prisma.radios.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
              city: {
                some: {
                  name: {
                    contains: city as string
                  }
                }
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

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/cities-letter', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, letter } = req.query;

    try {
        const posts = await prisma.cities.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
                name: {
                    startsWith: String(letter),
                }
            },
            orderBy: {
                name: "desc"
            },
        });

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});


app.get('/api/v1/countries', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, country } = req.query;

    try {
        const posts = await prisma.radios.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
                country: {
                    some: {
                        name: {
                            contains: country as string
                        }
                    }
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

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/countries-letter', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, letter } = req.query;

    try {
        const posts = await prisma.countries.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
              name: {
                  startsWith: String(letter),
              }
            },
            orderBy: {
              name: "desc"
            },
        });

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/genres', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, genre } = req.query;

    try {
        const posts = await prisma.radios.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
                genres: {
                    some: {
                        name: {
                            contains: genre as string
                        }
                    }
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

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/genres-letter', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, letter } = req.query;

    try {
        const posts = await prisma.genres.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
                name: {
                    startsWith: String(letter),
                }
            },
            orderBy: {
                name: "asc"
            },
        });

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/languages', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, language } = req.query;

    try {
        const posts = await prisma.radios.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
                language: {
                    some: {
                        name: {
                            contains: language as string
                        }
                    }
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

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/languages-letter', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, letter } = req.query;

    try {
        const posts = await prisma.languages.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
            where: {
                name: {
                    startsWith: String(letter),
                }
            },
            orderBy: {
                name: "asc"
            },
        });

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/radios', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, language } = req.query;

    try {
        const posts = await prisma.radios.findMany({
            skip: parseInt(skip.toString(), 10),
            take: parseInt(take.toString(), 10),
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

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/regions', async (req, res) => {
    // Access query parameters
    try {
        const posts = await prisma.regions.findMany();

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/search', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, term } = req.query;

    try {
        const posts = await prisma.radios.findMany({
            take: 5,
            where: {
                title: {
                    contains: term as string
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

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

app.get('/api/v1/search-site', async (req, res) => {
    // Access query parameters
    const { skip = 0, take = 10, query } = req.query;

    try {
        const posts = await prisma.radios.findMany({
            take: 5,
             where: {
              title: {
                  contains: query as string
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

        // Send the successful response back to the client
        res.status(200).json(posts);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: "Unable to fetch posts" });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});



const server = app.listen(3001, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
