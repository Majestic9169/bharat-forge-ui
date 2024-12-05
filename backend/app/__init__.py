# app/__init__.py
from flask import Flask
from .routes import configure_routes
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    app.config.from_object('config.Config')
    configure_routes(app)
    return app