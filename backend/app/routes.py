# app/routes.py
from flask import request, jsonify
import json

def configure_routes(app):

    @app.route('/api/hello', methods=['GET'])
    def hello_world():
        return jsonify(message="Hello, World!")

    @app.route('/api/greet', methods=['POST'])
    def greet_user():
        data = request.get_json()
        name = data.get('name', 'Guest')
        return jsonify(message=f"Hello, {name}!")
    
    @app.route('/api/tasks', methods=['GET'])
    def get_tasks():
        with open('tasks.json', 'r') as file:
            data = json.load(file)
            return data
        
    @app.route('/api/c/task', methods=['POST'])
    def post_task():
        data = request.get_json()
        msg = data['command']
        print(msg)
        response = {
            'message': 'Task received!',
            'bot_assigned': '2',
            'status': 'pending'
        }
        return response