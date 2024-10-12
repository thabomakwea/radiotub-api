import express, { Request, Response } from 'express';
import { PrismaClient as RadioPrismaClient } from '../prisma/generated/radio';
import { PrismaClient as PodcastsPrismaClient } from '../prisma/generated/podcasts';
import { PrismaClient as PlaylistsPrismaClient } from '../prisma/generated/playlists';

const app = express();

// Initialize separate Prisma clients for each database
const radioPrisma = new RadioPrismaClient();
const podcastsPrisma = new PodcastsPrismaClient();
const playlistsPrisma = new PlaylistsPrismaClient();

app.get('/api/podcasts', async (req: Request, res: Response) => {
  try {
    // Extract and validate query parameters
    const skip = parseInt(req.query.skip as string, 10) || 0;
    const take = parseInt(req.query.take as string, 10) || 10; // Default to 10 if not provided

    // Fetch podcasts using Prisma
    const podcasts = await podcastsPrisma.podcasts.findMany({
      skip,
      take,
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
      },
    });

    // Send response
    res.json(podcasts);
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    res.status(500).json({ message: 'An error occurred while fetching podcasts' });
  }
});

app.get('/api/podcast', async (req: Request, res: Response) => {
  // Extract and validate query parameters
  const id = Number(req.query.id);
  try {
    // Fetch podcast using Prisma
    const podcast = await podcastsPrisma.podcasts.findFirst({
      where: {
          id: id
      },
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
      }
    });
    res.json(podcast);
  } catch (error) {
    console.error('Error fetching podcast:', error);
    res.status(500).json({ message: 'An error occurred while fetching podcast' });
  }
  
});

app.get('/api/podcasts/genres', async (req: Request, res: Response) => {
  // Extract and validate query parameters
  const name = req.query.name;
  // Extract and validate query parameters
  const skip = parseInt(req.query.skip as string, 10) || 0;
  const take = parseInt(req.query.take as string, 10) || 10;
  try {
    // Fetch podcast using Prisma 

    const podcast = await podcastsPrisma.podcasts.findMany({
      skip,
      take,
      // check if the name is in the category1, category2, category3, category4, category5, category6, category7, category8, category9, category10
      where: {
        OR: [
          { category1: String(name) },
          { category2: String(name) },
          { category3: String(name) },
          { category4: String(name) },
          { category5: String(name) },
          { category6: String(name) },
          { category7: String(name) },
          { category8: String(name) },
          { category9: String(name) },
        ]
      },
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
        category1: true,
        category2: true,
        category3: true,
        category4: true,
        category5: true,
        category6: true,
        category7: true,
        category8: true,
        category9: true,
      }
    });
    res.json(podcast);
  } catch (error) {
    console.error('Error fetching podcast:', error);
    res.status(500).json({ message: 'An error occurred while fetching podcast' });
  }
  
});

app.get('/api/podcast/genres-letter', async (req: Request, res: Response) => {
  // Extract and validate query parameters
  const skip = parseInt(req.query.skip as string, 10) || 0;
  const take = parseInt(req.query.take as string, 10) || 10; // Default to 10 if not provided
  const letter = String(req.query.letter);

  try {
    const podcasts = await podcastsPrisma.genres.findMany({
      skip,
      take,
      where: {
        genre: {
          startsWith: letter
        }
      },
    });
    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching genres' });
  }
});


app.get('/api/playlists', async (req: Request, res: Response) => {
  // Extract and validate query parameters
  const skip = parseInt(req.query.skip as string, 10) || 0;
  const take = parseInt(req.query.take as string, 10) || 10; // Default to 10 if not provided

  try {
    const playlist = await playlistsPrisma.playlists.findMany({
        skip,
        take,
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
        imageUrl: true,
        category_1: true,
        category_2: true,
        category_3: true,
        category_4: true,
        category_5: true,
        category_6: true,
        category_7: true,
        category_8: true,
        category_9: true,
        category_10: true,
        // Exclude `newestEnclosureDuration`
      }
    });
    res.json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching playlist' });
  }
});

app.get('/api/playlist', async (req: Request, res: Response) => {
  // Extract and validate query parameters
  const playlistId = req.query.playlistId as string;

  try {
    const playlist = await playlistsPrisma.playlists.findFirst({
      where: {
        playlistId
      },
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
      imageUrl: true,
      category_1: true,
      category_2: true,
      category_3: true,
      category_4: true,
      category_5: true,
      category_6: true,
      category_7: true,
      category_8: true,
      category_9: true,
      category_10: true,
      // Exclude `newestEnclosureDuration`

      }
    });
    res.json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching playlist' });
  }
}); 

app.get('/api/playlists/genres', async (req: Request, res: Response) => {
  // Extract and validate query parameters
  const name = req.query.name;
  // Extract and validate query parameters
  const skip = parseInt(req.query.skip as string, 10) || 0;
  const take = parseInt(req.query.take as string, 10) || 10;
  try {
    // Fetch podcast using Prisma 

    const playlist = await playlistsPrisma.playlists.findMany({
      skip,
      take,
      // check if the name is in the category1, category2, category3, category4, category5, category6, category7, category8, category9, category10
      where: {
        OR: [
          { category_1: String(name) },
          { category_2: String(name) },
          { category_3: String(name) },
          { category_4: String(name) },
          { category_5: String(name) },
          { category_6: String(name) },
          { category_7: String(name) },
          { category_8: String(name) },
          { category_9: String(name) },
        ]
      },
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
        imageUrl: true,
        category_1: true,
        category_2: true,
        category_3: true,
        category_4: true,
        category_5: true,
        category_6: true,
        category_7: true,
        category_8: true,
        category_9: true,
      }
    });
    res.json(playlist);
  } catch (error) {
    console.error('Error fetching podcast:', error);
    res.status(500).json({ message: 'An error occurred while fetching podcast' });
  }
  
});

app.get('/api/playlist/genres-letter', async (req: Request, res: Response) => {
  // Extract and validate query parameters
  const skip = parseInt(req.query.skip as string, 10) || 0;
  const take = parseInt(req.query.take as string, 10) || 10; // Default to 10 if not provided
  const letter = String(req.query.letter);

  try {
    // const playlists = await playlistsPrisma.genres.findMany({
    //   skip,
    //   take,
    //   where: {
    //     genre: {
    //       startsWith: letter
    //     }
    //   },
    // });
    // res.json(playlists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching genres' });
  }
});

app.get('/api/radio', async (req: Request, res: Response) => {
  try {
    const podcasts = await radioPrisma.radios.findMany({
        take: 30,
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
      }
    });
    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching podcasts' });
  }
});

app.get('/api/search', async (req: Request, res: Response) => {
    const skip = parseInt(req.query.skip as string, 10) || 0;
    const take = parseInt(req.query.take as string, 10) || 10; // Default to 10 if not provided
    const query = String(req.query.query || '');

    try {
        // Perform parallel queries for all three databases with pagination
        const [playlistsResults, podcastsResults, radiosResults] = await Promise.all([
            playlistsPrisma.playlists.findMany({
                skip,
                take,
                where: {
                    OR: [
                        { title: { contains: query } },
                        { description: { contains: query } },
                        { channelTitle: { contains: query } }
                    ]
                },
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
                    imageUrl: true,
                    category_1: true,
                    category_2: true,
                    category_3: true,
                    category_4: true,
                    category_5: true,
                    category_6: true,
                    category_7: true,
                    category_8: true,
                    category_9: true,
                    category_10: true,
                }
            }),
            podcastsPrisma.podcasts.findMany({
                skip,
                take,
                where: {
                    OR: [
                        { title: { contains: query } },
                        { description: { contains: query } },
                        { itunesAuthor: { contains: query } }
                    ]
                },
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
                }
            }),
            radioPrisma.radios.findMany({
                skip,
                take,
                where: {
                    OR: [
                        { title: { contains: query } },
                        { short_description: { contains: query } },
                        { radio_language: { contains: query } }
                    ]
                },
                include: {
                    genres: true,
                    country: true,
                    city: true,
                    language: true,
                    state: true,
                    region: true,
                },
                orderBy: [{ no_play: 'asc' }, { stars: 'desc' }, { listens: 'desc' }]
            })
        ]);

        // Combine the results and paginate accordingly
        const combinedResults = [
            ...playlistsResults.map(result => ({ ...result, type: 'playlist' })),
            ...podcastsResults.map(result => ({ ...result, type: 'podcast' })),
            ...radiosResults.map(result => ({ ...result, type: 'radio' }))
        ];

        // Return the results as JSON
        res.status(200).json(combinedResults);

    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Unable to fetch search results' });
    }
});



// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

