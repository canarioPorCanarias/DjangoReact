from .Google import Create_Service
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_message(name:str,to:str):
    CLIENT_SECRET_FILE = './mail/client.json'
    API_NAME = 'gmail'
    API_VERSION = 'v1'
    SCOPES = ['https://mail.google.com/']

    service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)
    with open('./assets/templates/minified.html') as f:
        htmlmini= f.read()
        htmlmini = htmlmini.replace("NAMEHERE",name)

    mimeMessage = MIMEMultipart()
    mimeMessage['to'] = to
    mimeMessage['subject'] = 'Gracias por contactarnos'
    mimeMessage.attach(MIMEText(htmlmini, 'html'))
    raw_string = base64.urlsafe_b64encode(mimeMessage.as_bytes()).decode()

    message = service.users().messages().send(userId='me', body={'raw': raw_string}).execute()
    print(message)

