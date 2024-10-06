import os
import json
import re

# Define the folder where the JSON files are located
folder_path = './'

# Define the folder where the updated files will be saved
mapped_folder_path = './mapped'

# Create the mapped folder if it doesn't exist
if not os.path.exists(mapped_folder_path):
    os.makedirs(mapped_folder_path)

# Define a mapping of keywords to genres/topics
keyword_to_genre = {
    'k-pop': 'K-Pop',
    'soundtrack': 'Soundtracks',
    'music': 'Music',
    'hits': 'Hits',
    'rock': 'Rock',
    'jazz': 'Jazz',
    'hip-hop': 'Hip-Hop',
    'classical': 'Classical',
    'k-drama': 'K-Drama',
    'pop': 'Pop',
    'rap': 'Rap',
    'country': 'Country',
    'blues': 'Blues',
    'hip hop': 'hip hop',
    'metal': 'Metal',
    'folk': 'Folk',
    'indie': 'Indie',
    'alternative': 'Alternative',
    'electronic': 'Electronic',
    'dance': 'Dance',
    'reggae': 'Reggae',
    'soul': 'Soul',
    'funk': 'Funk',
    'disco': 'Disco',
    'latin': 'Latin',
    'gospel': 'Gospel',
    'christian': 'Christian',
    'holiday': 'Holiday',
    'instrumental': 'Instrumental',
    'acoustic': 'Acoustic',
    'live': 'Live',
    'cover': 'Covers',
    'remix': 'Remix',
    'lyric': 'Lyrics',
    'karaoke': 'Karaoke',
    'chill': 'Chill',
    'relax': 'Relax',
    'study': 'Study',
    'workout': 'Workout',
    'focus': 'Focus',
    'sleep': 'Sleep',
    'party': 'Party',
    'summer': 'Summer',
    'winter': 'Winter',
    'spring': 'Spring',
    'fall': 'Fall',
    'love': 'Love',
    'heartbreak': 'Heartbreak',
    'romance': 'Romance',
    'wedding': 'Wedding',
    'breakup': 'Breakup',
    'motivation': 'Motivation',
    'inspiration': 'Inspiration',
    '1990s': '1990s',
    'sad': 'Sad',
    'angry': 'Angry',
    'calm': 'Calm',
    'energetic': 'Energetic',
    'upbeat': 'Upbeat',
    'mellow': 'Mellow',
    'fast': 'Fast',
    'slow': 'Slow',
    'oldies': 'Oldies',
    'hits': 'Hits',
    'charts': 'Charts',
    'top': 'Top',
    'best': 'Best',
    'new': 'New',
    'latest': 'Latest',
    'trending': 'Trending',
    'viral': 'Viral',
    'Spring': 'Spring',
    'famous': 'Famous',
    'classic': 'Classic',
    'legendary': 'Legendary',
    'greatest': 'Greatest',
    'african': 'African',
    'asian': 'Asian',
    'european': 'European',
    'indian': 'Indian',
    'latin American': 'Latin American',
    'middle Eastern': 'Middle Eastern',
    'north American': 'North American',
    'south American': 'South American',
    'world': 'World',
    'global': 'Global',
    'local': 'Local',
    'international': 'International',
    'regional': 'Regional',
    'national': 'National',
    'city': 'City', 
    'amapiano': 'Amapiano',
    'afrobeat': 'Afrobeat',
    'bachata': 'Bachata',
    'bollywood': 'Bollywood',
    'house': 'House',
    'Hard': 'Hard',
    'tango': 'Tango',
    'vallenato': 'Vallenato',
    'zouk': 'Zouk',
    'soca': 'Soca',
    'merengue': 'Merengue',
    'cumbia': 'Cumbia',
    'samba': 'Samba',
    'forró': 'Forró',
    'sertanejo': 'Sertanejo',
    'album': 'Album',
    'single': 'Single',
    'track': 'Tracks',
    'song': 'Songs',
    'video': 'Video',
    'audio': 'Audio',
    'official': 'Official',
    'music video': 'Music Video',
    'live performance': 'Live Performance',
    'concert': 'Concert',
    'festival': 'Festival',
    'event': 'Event',
    'show': 'Show',
    'tour': 'Tour',
    'session': 'Session',
    'studio': 'Studio',
    'anthem': 'Anthem',
    'pop': 'Pop',
    'retro': 'retro',
    'vintage': 'Vintage',
    'sounds': 'Sounds',
    'melodies': 'Melodies',
    'beats': 'Beats',
    'rhythms': 'Rhythms',
    'songs': 'Songs',
    'videos': 'Videos',
    'audios': 'Audios',
    'contest': 'Contest',
    'tempo': 'tempo',
    'rhythm': 'Rhythm',
    'melody': 'Melody',
    'beat': 'Beat',
    'vibe': 'Vibe',
    'groove': 'Groove',
    'harmony': 'Harmony',
    'tune': 'Tune',
    'sound': 'Sound',
    'noise': 'Noise',
    'musician': 'Musician',
    'artist': 'Artist',
    'band': 'Band',
    'group': 'Group',
    'energy': 'Energy',
    'emotion': 'Emotion',
    'feeling': 'Feeling',
    'mood': 'Mood',
    'vocal': 'Vocal',
    'power': 'Power',
    'passion': 'Passion',
    'hip hop': 'Hip hop',
    'aggressive': 'Aggressive',
    '80s': '80s',
    '90s': '90s',
    '60s': '60s',
    '50s': '50s',
    '70s': '70s',
    '00s': '00s',
    'uplifting': 'Uplifting',
    'positive': 'Positive',
    'deep': 'Deep',
    'kpop': 'Kpop',
    'modern': 'Modern',
    'contemporary': 'Contemporary',
    'traditional': 'Traditional',
    'original': 'Original',
    'gangsta': 'Gangsta',
    'playlist': 'Playlist',
    'mix': 'Mix',
    'compilation': 'Compilation',
    'collection': 'Collection',
    'selection': 'Selection',
    'series': 'Series',
    'healing': 'Healing',
    'therapy': 'Therapy',
    'meditation': 'Meditation',
    'yoga': 'Yoga',
    'Feel-good': 'Feel-good',
    'feel good': 'Feel good',
    'positive vibe': 'Positive vibes',
    'good vibe': 'Good vibes',
    '1990s': '1990s',
    '1950s': '1950s',
    '2000s': '2000s',
    '2010s': '2010s',
    '2020s': '2020s',
    '2024': '2024',
    '2023': '2023',
    '2022': '2022',
    '2021': '2021',
    '2020': '2020',
    'old school': 'Old School',
    'soft': 'Soft',
    'golden': 'Golden',
    'underground': 'Underground',
    'singalong': 'Singalong',
    'sing along': 'Sing along',
    'club': 'Club',
    'western': 'Western',
    'eastern': 'Eastern',
    'southern': 'Southern',
    'northern': 'Northern',
    'focus': 'Focus',
    'grammy': 'Grammy',
    'winners': 'Winners',
    'essential': 'Essential',
    'heavy': 'Heavy',
    'hardrock': 'Hardrock',
    'cafe': 'Cafe',
    'korean': 'Korean',
    'japanese': 'Japanese',
    'chinese': 'Chinese',
    'listen': 'Listen',
    'enjoy': 'Enjoy',
    'discover': 'Discover',
    'fusion': 'Fusion',
    'beach': 'Beach',
    'road trip': 'Road Trip',
    'drive': 'Drive',
    'travel': 'Travel',
    'fresh': 'Fresh',
    'earth': 'Earth',
    'nature': 'Nature',
    'environment': 'Environment',
    'solo': 'Solo',
    'piano': 'Piano',
    'intimate': 'Intimate',
    'christian': 'Christian',
    'gospel': 'Gospel',
    'worship': 'Worship',
    'praise': 'Praise',
    'hymns': 'Hymns',
    'spiritual': 'Spiritual',
    'religious': 'Religious',
    'church': 'Church',
    'faith': 'Faith',
    'hope': 'Hope',
    'peace': 'Peace',
    'rapper': 'Rappers',
    'singer': 'Singers',
    'band': 'Bands',
    'comfy': 'Comfy',
    'cozy': 'Cozy',
    'warm': 'Warm',
    'eclectic': 'Eclectic',
    'diverse': 'Diverse',
    'queens': 'Queens',
    'talented': 'Talented',
    'women': 'Women',
    'ladies': 'Ladies',
    'friend': 'Friends',
    'family': 'Family',
    'kids': 'Kids',
    'children': 'Children',
    'teens': 'Teens',
    'timeless': 'Timeless',
    'pilipino': 'Pilipino',
    'filipino': 'Filipino',
    'aamapiano': 'Aamapiano',
    'anime': 'Anime',
    'cartoon': 'Cartoon',
    'animation': 'Animation',
    'disney': 'Disney',
    'pixar': 'Pixar',
    'dreamworks': 'Dreamworks',
    'hottest': 'Hottest',
    'coolest': 'Coolest',
    'stars': 'Stars',
    'punk': 'Punk',
    'teenage': 'Teenage',
    'pumpup': 'Pumpup',
    'motivate': 'Motivate',
    'inspire': 'Inspire',
    'encourage': 'Encourage',
    'performance': 'Performance',
    'showcase': 'Showcase',
    'talent': 'Talent',
    'charismatic': 'Charismatic',
    'vibrant': 'Vibrant',
    'heart': 'Heart',
    'soulful': 'Soulful',
    'most played': 'Most played',
    'most popular': 'Most popular',
    'most streamed': 'Most streamed',
    'most viewed': 'Most viewed',
    'most liked': 'Most liked',
    'most loved': 'Most loved',
    'techno': 'Techno',
    'hindi': 'Hindi',
    'beautiful': 'Beautiful',
    'exercise': 'Exercise',
    'gym': 'Gym',
    'fitness': 'Fitness',
    'health': 'Health',
    'wellness': 'Wellness',
    'DJ': 'DJ',
    'gaming': 'Gaming',
    'smooth': 'Smooth',
    'sensual': 'Sensual',
    'sexy': 'Sexy',
    'bliss': 'Bliss',
    'ballads': 'Ballads',
    'rhythmic': 'Rhythmic',
    'groovy': 'Groovy',
    'catchy': 'Catchy',
    'paradise': 'Paradise',
    'melodic': 'Melodic',
    'instrumental': 'Instrumentals',
    'memorable': 'Memorable',
    'nostalgic': 'Nostalgic',
    'throwback': 'Throwback',
    'flashback': 'Flashback',
    'influential': 'Influential',
    'iconic': 'Iconic',
    'rnb': 'RnB',
    'soul': 'Soul',
    'mainstream': 'Mainstream',
    'trap': 'Trap',
    'chillout': 'Chillout',
    'lounge': 'Lounge',
    'downtempo': 'Downtempo',
    'ambient': 'Ambient',
    'relaxing': 'Relaxing',
    'soothing': 'Soothing',
    'biggest': 'Biggest',
    'hype': 'Hype',
    'trendy': 'Trendy',
    'mid-tempo': 'Mid-tempo',

} 

# Function to clean text and extract relevant keywords
def extract_keywords(text):
    # Convert to lower case and remove non-alphabetic characters
    text = re.sub(r'[^a-zA-Z\s]', '', text.lower())
    
    # Split into words
    words = text.split()
    
    # Find matching keywords from the text
    found_genres = []
    for word in words:
        for keyword in keyword_to_genre:
            if keyword in word and keyword_to_genre[keyword] not in found_genres:
                found_genres.append(keyword_to_genre[keyword])
                
    return found_genres

# Function to update the snippet based on title and description
def update_snippet(snippet):
    # Add an empty image URL
    snippet['image'] = {"url": ""}
    
    # Extract genres from title and description
    title_keywords = extract_keywords(snippet.get('title', ''))
    description_keywords = extract_keywords(snippet.get('description', ''))
    
    # Merge the found keywords (and limit to max 10)
    all_genres = title_keywords + description_keywords
    all_genres = list(dict.fromkeys(all_genres))  # Remove duplicates
    
    # Assign genres to category_1 to category_10
    for i in range(1, 11):
        key = f"category_{i}"
        if i <= len(all_genres):
            snippet[key] = all_genres[i - 1]  # Assign genre if available
        else:
            snippet[key] = ""  # Leave empty if no more genres

    return snippet

# Function to update JSON file
def update_json_file(file_path):
    # Open file with utf-8 encoding to avoid UnicodeDecodeError
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Update each item's snippet
    if 'items' in data:
        for item in data['items']:
            if 'snippet' in item:
                item['snippet'] = update_snippet(item['snippet'])
    
    # Save the updated file in the 'mapped' folder with the same file name
    new_file_path = os.path.join(mapped_folder_path, os.path.basename(file_path))
    with open(new_file_path, 'w', encoding='utf-8') as new_file:
        json.dump(data, new_file, indent=4)

# Iterate through all the JSON files in the folder
for file_name in os.listdir(folder_path):
    if file_name.endswith('.json'):
        file_path = os.path.join(folder_path, file_name)
        update_json_file(file_path)

print("All JSON files have been updated and saved in the 'mapped' folder.")