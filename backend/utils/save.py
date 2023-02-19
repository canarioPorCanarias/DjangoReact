import json
from bs4 import BeautifulSoup

with open('./save.html', 'r') as f:
    file = f.read()

parsed = BeautifulSoup(file, 'html.parser')
"""
primero
"""
y = parsed.find_all('article')
with open('save.html', 'w') as f:
    f.write(str(y))

with open('./save.html', 'r') as f:
    file = f.read()

parsed = BeautifulSoup(file, 'html.parser')
"""
segundo
"""
info = []
y = parsed.find_all('article')
for x in y:
    info.append({
        "name": x.attrs['data-name'],
        "price": x.attrs['data-price'],
        "category": x.attrs['data-category'],
        "id_data": x.attrs['data-id'],
        "img": x.find('img').attrs['src'],
        "slug": x.find('a').attrs['href']
    })

with open('save.json', 'w') as f:
    json.dump(info, f, indent=4)
