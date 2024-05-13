import { Prisma, PrismaClient } from '@prisma/client'

import fs from 'fs';
import path from 'path';


const prisma = new PrismaClient()
const main = async () => {


    const directoryPath = path.join(__dirname, '../data/Africa/radios/'); // Replace with your folder path
    let finalData: any[] = [];
    const allRadios: any[] = [];
    console.log(directoryPath)

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        // Filter JSON files
        const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

        jsonFiles.forEach(file => {
            // Read JSON file
            let rawData = fs.readFileSync(path.join(directoryPath, file)).toString();
            let data = JSON.parse(rawData);

            // Combine data into finalData array
            finalData = finalData.concat(data);
        });
        // Write combined data to new JSON file
        // fs.writeFile('combined.json', JSON.stringify(finalData, null, 4), (err) => {
        //     if (err) throw err;
        //     console.log('Combined file created successfully!');
        // });

        // finalData.forEach((province) => {
        //     const radios = province.radios.map((radio) => ({
        //         state: province.title,
        //         state_id: province.link.split('/').pop(),
        //         ...radio,
        //     }));

        //     allRadios.push(...radios);
        //     console.log('pushed', allRadios[0].title)
        // });
        finalData.forEach((province) => {
            // Check if province.radios is an array before calling map
            if (Array.isArray(province.radios)) {
                const radios = province.radios.map((radio: any) => ({
                    state: province.title,
                    state_id: province.link.split('/').pop(),
                    ...radio,
                }));

                allRadios.push(...radios);
            } else {
                // Handle the case where province.radios is not an array
                console.log(`province.radios is not an array for province: ${province.title}`);
            }
            console.log('pushed', province.title);
        });


        startSeeding()
    });

    const startSeeding = async() => {
        console.log('seeding: startSeeding()')
        for (let index = 0; index < allRadios.length; index++) {
            const element = allRadios[index];
            let genres = []
            let cities = []
            let countries = []
            let languages = []
            let regions = []
            let states = []

            // if (jsonData[index].title.length > 0 ) {
            // Create genres
            for (let j = 0; j < element.genres.length; j++) {
                const genre = element.genres[j];
                genres.push(
                    {
                        create: { name: genre },
                        where: {
                            name: genre,
                        },
                    }
                )
            }
            // create cities
            cities.push(
                {
                    create: { name: element.location.city },
                    where: {
                        name: element.location.city,
                    },
                }
            )
            // create countries
            countries.push(
                {
                    create: { name: element.location.country },
                    where: {
                        name: element.location.country,
                    },
                }
            )
            // create languages
            languages.push(
                {
                    create: { name: element.radio_language },
                    where: {
                        name: element.radio_language,
                    },
                }
            )
            // create regions
            regions.push(
                {
                    create: { name: "North America" },
                    where: {
                        name: "North America",
                    },
                }
            )
            // create regions
            states.push(
                {
                    create: { name: element.state },
                    where: {
                        name: element.state,
                    },
                }
            )
 
            const radio = await prisma.radios.create({
                data: {
                    title: element.title,
                    no_play: element.no_play,
                    frequency: element.frequency || '',
                    link_deatils: element.link_deatils || '',
                    link_player: element.link_player || '',
                    image: element.radio_image || element.image || '',
                    listens: element.ratings.listens || '',
                    stars: element.ratings.stars || 0,
                    profile_slogan: element.profile_slogan || '',
                    radio_language: element.radio_language || '',
                    short_description: element.radio_info.short || '',
                    long_description: element.radio_info.rest || '',
                    website: element.radio_contact.website || '',
                    facebook: element.radio_contact.facebook || '',
                    twitter: element.radio_contact.twitter || '',
                    phone: element.radio_contact.phone || '',
                    address: element.radio_contact.address || '',
                    email: element.radio_contact.email || '',
                    radio_id: element.link_deatils.split('/')[2],
                    source: element.radio_source || '',
                    state_id: element.state_id,
                    shows: String(element.radio_shows),
                    city: {
                        connectOrCreate: cities,
                    },
                    country: {
                        connectOrCreate: countries,
                    },
                    genres: {
                        connectOrCreate: genres,
                    },
                    language: {
                        connectOrCreate: languages,
                    },
                    region: {
                        connectOrCreate: regions,
                    },
                    state: {
                        connectOrCreate: states,
                    },
                },
                include: {
                    city: true,
                    country: true,
                    genres: true,
                    language: true,
                    region: true,
                    state: true,
                }
            });
            // }
        }
    }




}
main()
    .catch(e => { console.log(e.message) })
    .finally(async () => {
        await prisma.$disconnect()
    })