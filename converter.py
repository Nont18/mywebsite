import json

def json_to_env(json_file_path, env_file_path):
    with open(json_file_path, 'r') as f:
        data = json.load(f)

    with open(env_file_path, 'w') as f:
        for key, value in data.items():
            f.write(f"{key}={value}\n")

