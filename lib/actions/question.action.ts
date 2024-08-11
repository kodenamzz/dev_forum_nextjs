"use server";
import { IQuestion } from "@/types";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";

export async function getQuestions(
  params: GetQuestionsParams
): Promise<IQuestion[]> {
  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/questions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result as IQuestion[];
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function createQuestion(newQuestion: CreateQuestionParams) {
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
