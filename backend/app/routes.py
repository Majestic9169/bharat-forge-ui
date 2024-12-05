# app/routes.py
from flask import request, jsonify
import json
import threading
import time
import uuid

tasks = {}

def long_running_task(task_id, msg):
    """Simulates a long-running task that takes time"""
    try:
        tasks[task_id] = {"status": "pending"}

        print(f"Task {task_id} started: {msg}")
        time.sleep(10)
        tasks[task_id]["status"] = "completed"
        tasks[task_id]["result"] = f"Task Completed: {msg}"
    except Exception as e:
        tasks[task_id]["status"] = "failed"
        tasks[task_id]["result"] = str(e)

def configure_routes(app):

    @app.route('/api/hello', methods=['GET'])
    def hello_world():
        return jsonify(message="Hello, World!")
    
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

        task_id = str(uuid.uuid4())
        threading.Thread(target=long_running_task, args=(task_id, msg)).start()

        tasks[task_id] = {"status": "pending", "result": None}

        print(f"Task {task_id} created: {msg}")

        response = {
            'message': 'Task received ',
            'bot_assigned': '2',
            'status': 'pending',
            'task_id': task_id
        }
        return response
    
    @app.route('/api/c/task/status/<task_id>', methods=['GET'])
    def get_task_status(task_id):
        task = tasks.get(task_id)
        print(tasks)
        if task:
            return jsonify(task)
        else:
            return jsonify({"error": "Task not found"}), 200