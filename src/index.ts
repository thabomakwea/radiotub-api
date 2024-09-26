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
      // Exclude `newestEnclosureDuration`

      }
    });
    res.json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching playlist' });
  }
});  


// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

