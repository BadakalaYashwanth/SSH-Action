/**
 * Deploy Files - JavaScript Application
 * Simple application demonstrating core JS concepts.
 */

// Configuration
const APP_CONFIG = {
    name: "Deploy App",
    version: "1.0.0",
    debug: false,
};

/**
 * Greet a user by name.
 * @param {string} name - The user's name.
 * @returns {string} Greeting message.
 */
function greet(name) {
    return `Hello, ${name}! Welcome to ${APP_CONFIG.name} v${APP_CONFIG.version}`;
}

/**
 * Calculate the sum of an array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} The sum.
 */
function calculateSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

/**
 * Display application info in the console.
 */
function displayInfo() {
    console.log("=== App Configuration ===");
    Object.entries(APP_CONFIG).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
    });
}

// Main execution
function main() {
    console.log(greet("World"));

    const numbers = [1, 2, 3, 4, 5];
    const total = calculateSum(numbers);
    console.log(`Sum of [${numbers}] = ${total}`);

    displayInfo();
}

main();
