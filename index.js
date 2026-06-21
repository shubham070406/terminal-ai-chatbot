import readlineSync from "readline-sync";
import chalk from "chalk";
import { generateResponse } from "./utils/fallback.js";

let currentModel = "groq";

console.log(chalk.green("*********** AI Terminal Chatbot ***********"));
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

    if (!input) {
        console.log(
            chalk.red("Please enter something.")
        );
        continue;
    }

    if (input === "/exit") {
        console.log(
            chalk.green("Goodbye!")
        );
        break;
    }

    if (input === "/groq") {
        currentModel = "groq";

        console.log(
            chalk.green("Using Groq Model")
        );

        continue;
    }

    if (input === "/gemini") {
        currentModel = "gemini";

        console.log(
            chalk.green("Using Gemini Model")
        );

        continue;
    }

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

    if (input === "/clear") {
        console.clear();
        continue;
    }

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