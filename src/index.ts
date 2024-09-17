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
// app.get('/api/podcasts', async (req: Request, res: Response) => {
//   try {
//     const podcasts = await podcastsPrisma.podcasts.findMany({
//         take: 30,
//         select: {
//         id: true,
//         title: true,
//         description: true,
//         link: true,
//         itunesId: true,
//         originalUrl: true,
//         itunesAuthor: true,
//         itunesOwnerName: true,
//         imageUrl: true,
//         language: true,
//         episodeCount: true,
//         popularityScore: true,
//         priority: true,
//         category1: true,
//         category2: true,
//         category3: true,
//         category4: true,
//         category5: true,
//         category6: true,
//         category7: true,
//         category8: true,
//         category9: true,
//         category10: true,
//         // Exclude `newestEnclosureDuration`
//       }
//     });
//     res.json(podcasts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching podcasts' });
//   }
// });

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


// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

