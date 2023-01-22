import requests
from bs4 import BeautifulSoup

URL = "https://travel.gc.ca/destinations/south-africa"
page = requests.get(URL)
VALID_TAGS = ['div', 'p']

soup = BeautifulSoup(page.content, "html.parser")
risk = soup.find(id="risk").find("p")
security = soup.find(id="security").findAll("p")
entryexit = soup.find(id="entryexit").findAll("p")
health = soup.find(id="health").findAll("p")
laws = soup.find(id="laws")
disasters = soup.find(id="disasters")
print(risk.text.strip()) 
print('-' * 100)
for p in soup.find(id="security").select('p'):
    print(p.get_text(strip=True, separator='\n'))
print('-' * 100)
for p in soup.find(id="entryexit").select('p'):
    print(p.get_text(strip=True, separator='\n'))
print('-' * 100)
for p in soup.find(id="health").select('p'):
    print(p.get_text(strip=True, separator='\n'))
