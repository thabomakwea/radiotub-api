from selenium import webdriver
from bs4 import BeautifulSoup
import time
import json
import os
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Define the folder where the updated JSON files are located
mapped_folder_path = './mapped'

# Setup Selenium WebDriver
def setup_driver():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')  # Run browser in headless mode (no GUI)
    options.add_argument('--disable-gpu')
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    return driver

# Function to get the image URL from YouTube Music using the playlist ID
def get_image_url(playlist_id, driver):
    try:
        # Construct the YouTube Music playlist URL
        url = f"https://music.youtube.com/playlist?list={playlist_id}"
        driver.get(url)

        # Scroll down to load the entire page, if needed
        ScrollNumber = 5  # Adjust this as needed for deeper scrolling
        for _ in range(ScrollNumber):
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(1)  # Wait for the page to load more content

        # Use BeautifulSoup to parse the page source
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Find the image URL in the <meta> tag with name="twitter:image"
        meta_image = soup.find('meta', attrs={'name': 'twitter:image'})
        if meta_image and meta_image['content']:
            image_url = meta_image['content']  # Get the content (image URL) from the meta tag
            return image_url

        print(f"Image element not found for playlist {playlist_id}")
        return None
    except Exception as e:
        print(f"Error fetching image for playlist {playlist_id}: {e}")
        return None

# Function to update the JSON file with the retrieved image URL
def update_json_file_with_image(file_path, driver):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    if 'items' in data:
        for item in data['items']:
            if 'id' in item and 'snippet' in item:
                playlist_id = item['id']
                # Get the image URL from YouTube Music
                image_url = get_image_url(playlist_id, driver)

                # Update the snippet's image URL if we successfully retrieved the image URL
                if image_url:
                    item['snippet']['image']['url'] = image_url
                    print(f"Updated image URL for playlist {playlist_id}: {image_url}")

    # Write the updated data back to the JSON file
    with open(file_path, 'w', encoding='utf-8') as new_file:
        json.dump(data, new_file, indent=4)

# Main function to process all JSON files in the mapped folder
def process_mapped_folder():
    driver = setup_driver()

    for file_name in os.listdir(mapped_folder_path):
        if file_name.endswith('.json'):
            file_path = os.path.join(mapped_folder_path, file_name)
            update_json_file_with_image(file_path, driver)

    driver.quit()

if __name__ == '__main__':
    process_mapped_folder()
