"use server";
import { IQuestion } from "@/types";
import {
  CreateQuestionParams,
  GetQuestionByIdParams,
  GetQuestionsParams,
  QuestionVoteParams,
} from "./shared.types";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createSearchParamsString } from "../utils";

export async function getQuestions(
  params: GetQuestionsParams
): Promise<IQuestion[]> {
  try {
    const searchParams = createSearchParamsString(params);
    const response = await fetch(
      `${process.env.API_ENDPOINT}/questions${searchParams}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

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
    const response = await fetch(`${process.env.API_ENDPOINT}/questions`, {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("result", result);
    revalidatePath(path);
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function getQuestionById(
  params: GetQuestionByIdParams
): Promise<IQuestion> {
  try {
    const response = await fetch(
      `${process.env.API_ENDPOINT}/questions/${params.questionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result as IQuestion;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function upvoteQuestion(params: QuestionVoteParams) {
  try {
    const { path, ...questionVoteData } = params;

    const response = await fetch(
      `${process.env.API_ENDPOINT}/questions/upvote`,
      {
        method: "PUT",
        body: JSON.stringify(questionVoteData),
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    revalidatePath(path);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function downvoteQuestion(params: QuestionVoteParams) {
  try {
    const { path, ...questionVoteData } = params;

    const response = await fetch(
      `${process.env.API_ENDPOINT}/questions/downvote`,
      {
        method: "PUT",
        body: JSON.stringify(questionVoteData),
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    revalidatePath(path);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
