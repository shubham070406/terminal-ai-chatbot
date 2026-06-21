import { askGemini } from "./services/gemini.js";

const response = await askGemini("Who are you?");

console.log(response);