"use server";

import { cookies } from "next/headers";
import {
  AnswerVoteParams,
  CreateAnswerParams,
  GetAnswersParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import { IAnswer } from "@/types";
import { createSearchParamsString } from "../utils";

export async function createAnswer(newAnswer: CreateAnswerParams) {
  try {
    const { path, ...answer } = newAnswer;
    const response = await fetch(`${process.env.API_ENDPOINT}/answers`, {
      method: "POST",
      body: JSON.stringify(answer),
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

export async function getAnswers(
  params: GetAnswersParams
): Promise<{ answers: IAnswer[] }> {
  try {
    const searchParams = createSearchParamsString(params);
    const response = await fetch(
      `${process.env.API_ENDPOINT}/answers${searchParams}`,
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
    return result as { answers: IAnswer[] };
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function upvoteAnswer(params: AnswerVoteParams) {
  try {
    const { path, ...answerVoteData } = params;

    const response = await fetch(`${process.env.API_ENDPOINT}/answers/upvote`, {
      method: "PUT",
      body: JSON.stringify(answerVoteData),
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });

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

export async function downvoteAnswer(params: AnswerVoteParams) {
  try {
    const { path, ...answerVoteData } = params;

    const response = await fetch(
      `${process.env.API_ENDPOINT}/answers/downvote`,
      {
        method: "PUT",
        body: JSON.stringify(answerVoteData),
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
