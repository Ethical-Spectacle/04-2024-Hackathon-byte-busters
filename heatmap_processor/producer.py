import socketio
import json

# Initialize the Socket.IO client
sio = socketio.Client()

# Connect to the server
@sio.event
def connect():
    print('Connected to server')

@sio.event
def disconnect():
    print('Disconnected from server')

# Define a function to send data to the channel
def push_data_to_channel(data):
    sio.emit('data', json.dumps(data))

def set_fan_speed(value):
    if value < 28:
        return 0
    elif value >= 28 and value <= 35:
        return 40
    elif value > 35 and value <= 50:
        return 50
    elif value > 50 and value <= 60:
        return 60
    else:
        return 60



import random
def generate_temperature_data(layout):
    ans = []

    for row in layout.keys():
        clusters_status = []
        cluster_level_idx = []

        for idx, cluster in enumerate(layout[row]):
            col_status = []
            rack_level_idx = []

            for col in range(1, cluster+1):
                temperature = round(random.uniform(25, 60), 2)
                fan_speed = set_fan_speed(temperature)

                if(fan_speed >= 50):
                    rack_level_idx.append(col)

                col_status.append(
                    {
                        "cluster_id": idx+1,
                        "col_id": col,
                        "temperature": temperature,
                        "fan_speed": fan_speed
                    })
            
            
            if (len(rack_level_idx)/cluster) > 0.5:
                cooling_type = "cluster_level"
                cluster_level_idx.append(idx+1)
            else:
                cooling_type = "server_level"
                
            clusters_status.append({
                "cluster_id": idx+1,
                "cluster_type": "CPU",
                "cooling_type": cooling_type,
                "rack_level_cooling": rack_level_idx,
                "col_status": col_status,
            })
        
        if len(cluster_level_idx)/len(layout[row]) > 0.5:
            cooling_type = "row_level"
            cluster_level_idx.append(idx+1)
        else:
            cooling_type = clusters_status[0]["cooling_type"]

        row_dict = {
            "row_id": row,
            "cooling_type": cooling_type,
            "cluster_level_cooling": cluster_level_idx,
            "clusters_status": clusters_status
        }

        ans.append(row_dict)
    
    return ans       


# Main function to run the script
def main():
    # Connect to the Socket.IO server
    sio.connect('http://localhost:5001')

    # Example data to push
    while True:
        layout = {
            1 : [4, 5, 4],
            2 : [4,5,4],
            3 : [8,5,8]
        }
        data = generate_temperature_data(layout=layout)
        # Push data to the channel
        push_data_to_channel(data)

        # Wait for a few seconds to allow the server to receive the data
        # You can remove this if you don't need to wait
        sio.sleep(5)
    sio.disconnect()

if __name__ == '__main__':
    # Example usage
    main()

    # layout = {
    #         1 : [4, 5, 4],
    #         2 : [4,5,4],
    #         3 : [8,5,8]
    #     }
    # data = generate_temperature_data(layout=layout)
    # print(data)
