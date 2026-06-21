import readlineSync from "readline-sync";
import chalk from "chalk";
import { generateResponse } from "./utils/fallback.js";

let currentModel = "groq";

console.log(chalk.green("=== AI Terminal Chatbot ==="));
console.log(chalk.yellow("Available Commands:"));
console.log("/groq");
console.log("/gemini");
console.log("/help");
console.log("/clear");
console.log("/exit");

while (true) {

    let input = readlineSync.question(
        chalk.yellow("\nYou: ")
    );

    input = input.trim();

    // Empty input check
    if (!input) {
        console.log(
            chalk.red("Please enter something.")
        );
        continue;
    }

    // Exit
    if (input === "/exit") {
        console.log(
            chalk.green("Goodbye!")
        );
        break;
    }

    // Switch to Groq
    if (input === "/groq") {
        currentModel = "groq";

        console.log(
            chalk.green("Using Groq Model")
        );

        continue;
    }

    // Switch to Gemini
    if (input === "/gemini") {
        currentModel = "gemini";

        console.log(
            chalk.green("Using Gemini Model")
        );

        continue;
    }

    // Help command
    if (input === "/help") {

        console.log(`
Commands:

/groq    -> Switch to Groq
/gemini  -> Switch to Gemini
/help    -> Show commands
/clear   -> Clear terminal
/exit    -> Exit chatbot
        `);

        continue;
    }

    // Clear screen
    if (input === "/clear") {
        console.clear();
        continue;
    }

    // Generate AI response
    try {

        const response = await generateResponse(
            input,
            currentModel
        );

        console.log(
            chalk.cyan("\nAI: ") + response
        );

    } catch (error) {

        console.log(
            chalk.red(
                "Both models are unavailable."
            )
        );

        console.log(
            chalk.red(error.message)
        );

    }

}