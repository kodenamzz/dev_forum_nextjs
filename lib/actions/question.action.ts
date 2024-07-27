"use server";
import { NewQuestion } from "@/types";

export async function createQuestion(newQuestion: NewQuestion) {
  try {
    const { path, ...question } = newQuestion;
    console.log(" JSON.stringify(question)", JSON.stringify(question));
    const response = await fetch(`${process.env.API_ENDPOINT}/questions`, {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
