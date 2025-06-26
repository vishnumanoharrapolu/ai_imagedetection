from flask import Flask, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from http://localhost:8000

# Sightengine API credentials (replace with your own from sightengine.com)
API_USER = '1325202003'  # Replace with your API User
API_SECRET = 'wPvEfyxw8vNZdfdaaRwz8ysRXRdGsfsG'  # Replace with your API Secret

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'media' not in request.files:
        return {'error': 'No image file provided'}, 400

    file = request.files['media']
    params = {
        'models': 'genai',
        'api_user': API_USER,
        'api_secret': API_SECRET
    }
    try:
        response = requests.post('https://api.sightengine.com/1.0/check.json', 
                                files={'media': file}, 
                                data=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        return {'error': str(e)}, 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)