import sys

def perform_action(action):
    print(f"Did the action: {action}")

def main():
    # Check if arguments are provided
    if len(sys.argv) < 2:
        print("Please provide an argument.")
        return

    # Get the argument from command line
    arg = sys.argv[1]

    # Perform the action based on the argument
    if arg == 'annotate':
        perform_action('annotate')
    elif arg == 'decrypt':
        perform_action('decrypt')
    else:
        print("Invalid argument.")

if __name__ == '__main__':
    main()
