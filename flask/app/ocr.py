import os
import io
from google.cloud import vision


def get_image_text(file):
    # Initialize Client
    client = vision.ImageAnnotatorClient()
    image = vision.Image(content=file.read())
    response = client.document_text_detection(image=image)

    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(response.error.message)
        )

    return response.full_text_annotation.text
