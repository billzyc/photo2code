import os
import io
from google.cloud import vision

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'photo2code-ocr-758325bffa4e.json'

def get_image_text():
    # Initialize Client
    client = vision.ImageAnnotatorClient()
    path = './assets/code_greeting.png'

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.document_text_detection(image=image)

    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))

    return response.full_text_annotation.text


if __name__ == '__main__':
    get_image_text()
