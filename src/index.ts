import express, { Request, Response } from 'express';
import { PrismaClient as RadioPrismaClient } from '../prisma/generated/radio';
import { PrismaClient as PodcastsPrismaClient } from '../prisma/generated/podcasts';
import { PrismaClient as PlaylistsPrismaClient } from '../prisma/generated/playlists';

const app = express();

// Initialize separate Prisma clients for each database
const radioPrisma = new RadioPrismaClient();
const podcastsPrisma = new PodcastsPrismaClient();
const playlistsPrisma = new PlaylistsPrismaClient();

// Radio API
// app.get('/api/radio', async (req: Request, res: Response) => {
//   try {
//     const radioStations = await radioPrisma.radioStation.findMany();
//     res.json(radioStations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching radio stations' });
//   }
// });

// Podcasts API
app.get('/api/podcasts', async (req: Request, res: Response) => {
  try {
    const podcasts = await podcastsPrisma.podcasts.findMany({
        take: 5,
        select: {
        id: true,
        title: true,
        description: true,
        link: true,
        itunesId: true,
        originalUrl: true,
        itunesAuthor: true,
        itunesOwnerName: true,
        imageUrl: true,
        language: true,
        episodeCount: true,
        popularityScore: true,
        priority: true,
        category1: true,
        category2: true,
        category3: true,
        category4: true,
        category5: true,
        category6: true,
        category7: true,
        category8: true,
        category9: true,
        category10: true,
        // Exclude `newestEnclosureDuration`
      }
    });
    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching podcasts' });
  }
});

app.get('/api/radio', async (req: Request, res: Response) => {
  try {
    const podcasts = await radioPrisma.radios.findMany({
        take: 5,
        select: {
        id: true,
        title: true,
        city: true,
        country: true,
        genres: true,
        state: true,
        region: true,
        source: true,
        listens: true,
        image: true,
        // Exclude `newestEnclosureDuration`
      }
    });
    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching podcasts' });
  }
});

app.get('/api/playlists', async (req: Request, res: Response) => {
  try {
    const podcasts = await playlistsPrisma.playlists.findMany({
        take: 5,
        select: {
        id: true,
        title: true,
        playlistId: true,
        channelId: true,
        description: true,
        image: true,
        channelTitle: true,
        defaultLanguage: true,
        itemCount: true,
        // Exclude `newestEnclosureDuration`
      }
    });
    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching podcasts' });
  }
});

// Playlists API
// app.get('/api/playlists', async (req: Request, res: Response) => {
//   try {
//     const playlists = await playlistsPrisma.playlist.findMany();
//     res.json(playlists);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching playlists' });
//   }
// });

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



// import { Prisma, PrismaClient } from '@prisma/client'
// import cors from 'cors'; // Import the 'cors' package

// import express from 'express'
// // import radioPrisma from '../prisma/radio';
// import podcastsPrisma from '../prisma/generated/podcasts';
// // import playlistsPrisma from '../prisma/generated/playlists';

// const prisma = new PrismaClient()
// const app = express()

// app.use(express.json())
// app.use(cors());

// app.get('/api/v1/podcasts', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, city } = req.query;

//     try {
        
//         const posts = await prisma.. .findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//               city: {
//                 some: {
//                   name: {
//                     contains: city as string
//                   }
//                 }
//               }
//             },
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/cities', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, city } = req.query;

//     try {
//         const posts = await prisma.radios.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//               city: {
//                 some: {
//                   name: {
//                     contains: city as string
//                   }
//                 }
//               }
//             },
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/cities-letter', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, letter } = req.query;

//     try {
//         const posts = await prisma.cities.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//                 name: {
//                     startsWith: String(letter),
//                 }
//             },
//             orderBy: {
//                 name: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });


// app.get('/api/v1/countries', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, country } = req.query;

//     try {
//         const posts = await prisma.radios.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//                 country: {
//                     some: {
//                         name: {
//                             contains: country as string
//                         }
//                     }
//                 }
//             },
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/countries-letter', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, letter } = req.query;

//     try {
//         const posts = await prisma.countries.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//               name: {
//                   startsWith: String(letter),
//               }
//             },
//             orderBy: {
//               name: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/genres', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, genre } = req.query;

//     try {
//         const posts = await prisma.radios.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//                 genres: {
//                     some: {
//                         name: {
//                             contains: genre as string
//                         }
//                     }
//                 }
//             },
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/genres-letter', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, letter } = req.query;

//     try {
//         const posts = await prisma.genres.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//                 name: {
//                     startsWith: String(letter),
//                 }
//             },
//             orderBy: {
//                 name: "asc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/languages', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, language } = req.query;

//     try {
//         const posts = await prisma.radios.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//                 language: {
//                     some: {
//                         name: {
//                             contains: language as string
//                         }
//                     }
//                 }
//             },
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/languages-letter', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, letter } = req.query;

//     try {
//         const posts = await prisma.languages.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             where: {
//                 name: {
//                     startsWith: String(letter),
//                 }
//             },
//             orderBy: {
//                 name: "asc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/radios', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, language } = req.query;

//     try {
//         const posts = await prisma.radios.findMany({
//             skip: parseInt(skip.toString(), 10),
//             take: parseInt(take.toString(), 10),
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/regions', async (req, res) => {
//     // Access query parameters
//     try {
//         const posts = await prisma.regions.findMany();

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/search', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, term } = req.query;

//     try {
//         const posts = await prisma.radios.findMany({
//             take: 5,
//             where: {
//                 title: {
//                     contains: term as string
//                 }
//             },
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// app.get('/api/v1/search-site', async (req, res) => {
//     // Access query parameters
//     const { skip = 0, take = 10, query } = req.query;

//     try {
//         const posts = await prisma.radios.findMany({
//             take: 5,
//              where: {
//               title: {
//                   contains: query as string
//               }
//             },
//             include: {
//                 genres: true,
//                 country: true,
//                 city: true,
//                 language: true,
//                 state: true,
//                 region: true,
//             },
//             orderBy: {
//                 listens: "desc"
//             },
//         });

//         // Send the successful response back to the client
//         res.status(200).json(posts);
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({ error: "Unable to fetch posts" });
//     }
// });

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.status(200).send('OK');
// });



// const server = app.listen(3001, () =>
//   console.log(`
// 🚀 Server ready at: http://localhost:3000
// ⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
// )
