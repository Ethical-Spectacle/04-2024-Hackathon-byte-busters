from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

@app.route("/http-call")
def http_call():
    data = {'data':'This text was fetched using an HTTP call to server on render'}
    return jsonify(data)

@socketio.on("connect")
def connected():
    print("client has connected with id: ", request.sid)
    # emit("connect",{"data":f"id: {request.sid} is connected"})

@socketio.on('data/heatmap')
def handle_message(data):
    print("data from the front end: ",str(data))
    emit("data/heatmap",{'data':data,'id':request.sid},broadcast=True)

@socketio.on("disconnect")
def disconnected():
    print("user disconnected")
    emit("disconnect",f"user {request.sid} disconnected",broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True,port=5001)
