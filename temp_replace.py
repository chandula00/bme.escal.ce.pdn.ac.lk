with open('contactUs.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('PeraBME ESCAL Biomedical Research Group', 'ESCAL BME - Biomedical Research Group')

with open('contactUs.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced successfully in contactUs.html')
