import json
from bs4 import BeautifulSoup
import random

with open('save.html', 'r') as f:
    file = f.read()

parsed = BeautifulSoup(file, 'html.parser')
info = []

y = parsed.find_all(class_='sc-cTkxnA imhGni sc-leFFbm fCNbkU')


for x in y:
    info.append({
        "name": x.attrs['data-name'],
        "price": x.attrs['data-price'],
        "category": x.attrs['data-category'],
        "id_data": random.randint(100000, 999999),  # x.attrs['data-id'],
        "img": x.find('img').attrs['src'],
        "slug": x.attrs['href']
    })

with open('save.json', 'w') as f:
    json.dump(info, f, indent=4)
