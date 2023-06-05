import sys

def perform_action(action):
    print(f"Did the action: {action}")

def main():
    # Check if arguments are provided
    if len(sys.argv) > 1:
        print("Invalid argument")
        return

if __name__ == '__main__':
    main()