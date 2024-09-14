// // import { PrismaClient as RadioPrismaClient } from '../prisma/generated/radio';

// // const radioPrisma = new RadioPrismaClient();

// // const main = async () => {
// //     // Get the first 1000 records
// //     const first1000 = await radioPrisma.radios.findMany({
// //         orderBy: {
// //             id: 'asc',
// //         },
// //         take: 1000,
// //         select: {
// //             id: true
// //         }
// //     });

// //     // Extract the IDs of the first 1000 records
// //     const first1000Ids = first1000.map(record => record.id);

// //     // Delete all records except those in the first 1000
// //     await radioPrisma.radios.deleteMany({
// //         where: {
// //             id: {
// //                 notIn: first1000Ids
// //             }
// //         }
// //     });

// //     console.log('Deleted all records except the first 1000.');

// //     // Vacuum the database to reclaim space
// //     await radioPrisma.$executeRaw`VACUUM;`;

// //     console.log('Database vacuumed to reduce size.');
// // };

// // main()
// //     .catch(e => {
// //         console.log('Main error:', e.message);
// //     })
// //     .finally(async () => {
// //         await radioPrisma.$disconnect();
// //     });


// // const prisma = new PrismaClient()
// import { PrismaClient as PlaylistsPrismaClient } from '../prisma/generated/playlists';
// import fs from 'fs/promises'; // Use fs.promises for async operations
// import path from 'path';

// const playlistsPrisma = new PlaylistsPrismaClient();

// const main = async () => {
//     const directoryPath = path.join(__dirname, '../data/playlist/youtube/'); // Replace with your folder path
//     let finalData: any[] = [];
//     const allPlaylist: any[] = [];
    
//     try {
//         const files = await fs.readdir(directoryPath);

//         // Filter JSON files
//         const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

//         for (const file of jsonFiles) {
//             const rawData = await fs.readFile(path.join(directoryPath, file), 'utf-8');
//             const data = JSON.parse(rawData);

//             // Combine data into finalData array
//             finalData = finalData.concat(data);
//         }

//         finalData.forEach((playlist) => {
//             // Check if playlist.items is an array before calling map
//             if (Array.isArray(playlist.items)) {
//                 const items = playlist.items.map((item: any) => ({
//                     id: item.id,
//                     snippet: {
//                         playlistId: item.id,
//                         channelId: item.snippet?.channelId ?? '',
//                         title: item.snippet?.title ?? '',
//                         description: item.snippet?.description ?? '',
//                         image: item.snippet?.thumbnails?.medium?.url ?? '', // Adjusting image field as per your JSON
//                         channelTitle: item.snippet?.channelTitle ?? '',
//                         defaultLanguage: item.snippet?.defaultLanguage ?? null,
//                         itemCount: item.contentDetails?.itemCount ?? 0,
//                     }
//                 }));

//                 allPlaylist.push(...items);
//             } else {
//                 // Handle the case where playlist.items is not an array
//                 console.log(`playlist items is not an array for playlist: ${playlist.title}`);
//             }
//         });

//         await startSeeding(allPlaylist); // Call the seeding function with all playlists

//     } catch (err) {
//         console.error('Error processing files:', err);
//     }
// };

// const startSeeding = async (allPlaylist: any[]) => {
//     console.log('Seeding data...');
//     for (let index = 0; index < allPlaylist.length; index++) {
//         const element = allPlaylist[index];
//         try {
//             await playlistsPrisma.playlists.create({
//                 data: {
//                     playlistId: element.snippet.playlistId,
//                     channelId: element.snippet.channelId,
//                     title: element.snippet.title,
//                     description: element.snippet.description,
//                     image: element.snippet.image,
//                     channelTitle: element.snippet.channelTitle,
//                     defaultLanguage: element.snippet.defaultLanguage,
//                     itemCount: element.snippet.itemCount,
//                 },
//             });
//             console.log(`Seeded playlist: ${element.snippet.title}`);
//         } catch (err) {
//             console.error(`Error seeding playlist ${element.snippet.title}:`, err.message);
//         }
//     }
// };

// main()
//     .catch(e => {
//         console.log('Main error:', e.message);
//     })
//     .finally(async () => {
//         await playlistsPrisma.$disconnect();
//     });
