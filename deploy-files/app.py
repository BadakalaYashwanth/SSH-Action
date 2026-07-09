#!/usr/bin/env python3
"""Simple Python Application for deployment."""


def greet(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}! Welcome to the deploy-files app."


def calculate_sum(numbers: list) -> int:
    """Calculate the sum of a list of numbers."""
    return sum(numbers)


def main():
    """Main entry point."""
    print(greet("World"))

    numbers = [1, 2, 3, 4, 5]
    total = calculate_sum(numbers)
    print(f"Sum of {numbers} = {total}")

    # Dictionary example
    config = {
        "app_name": "Deploy App",
        "version": "1.0.0",
        "debug": False,
    }

    for key, value in config.items():
        print(f"{key}: {value}")


if __name__ == "__main__":
    main()
