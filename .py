import os
import re

def rename_folders(base_path):
    # Get a list of all folder names in the directory
    folders = [f for f in os.listdir(base_path) if os.path.isdir(os.path.join(base_path, f))]

    for folder in folders:
        match = re.search(r'(\D*)(\d+)(\D*)', folder)
        if match:
            prefix, number, suffix = match.groups()
            new_name = f"Day {int(number):03}{suffix}"  # Always pad to 3 digits and add 'Day'

            # Rename the folder
            old_path = os.path.join(base_path, folder)
            new_path = os.path.join(base_path, new_name)
            os.rename(old_path, new_path)
            print(f"Renamed: {folder} -> {new_name}")

# Example usage
if __name__ == "__main__":
    directory_path = os.getcwd()  # Automatically use the current working directory
    print(f"Using current directory: {directory_path}")
    rename_folders(directory_path)