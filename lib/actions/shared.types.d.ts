import { IUser } from "@/types";

// QUESTIONS
export interface GetQuestionsParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

export interface CreateQuestionParams {
  title: string;
  content: string;
  tags: string[];
  author: string | IUser;
  path: string;
}

export interface GetQuestionByIdParams {
  questionId: string;
}

// USERS
export interface GetAllUsersParams {
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string; // Add searchQuery parameter
}

// TAGS
export interface GetTopInteractedTagsParams {
  userId: string;
  limit?: number;
}

export interface GetAllTagsParams {
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string;
}

export type QueryParams =
  | GetQuestionsParams
  | CreateQuestionParams
  | GetAllUsersParams
  | GetTopInteractedTagsParams
  | GetAllTagsParams;
