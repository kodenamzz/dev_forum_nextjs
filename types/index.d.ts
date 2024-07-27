import { BADGE_CRITERIA, themes } from "@/constants";

export type AppTheme = (typeof themes)[number]["value"];

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface Job {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}

export interface Country {
  name: {
    common: string;
  };
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;

export interface NewQuestion {
  title: string;
  content: string;
  tags: string[];
  author: string;
  path: string;
}

export interface User {
  _id: string;
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation: number;
  // eslint-disable-next-line no-use-before-define
  saved: Question[];
  joinedAt: Date;
}

export interface Tag {
  _id: string;
  name: string;
  description?: string;
  // eslint-disable-next-line no-use-before-define
  questions: Question[];
  followers: User[];
  createdOn: Date;
}

export interface Answer {
  _id: string;
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation: number;
  // eslint-disable-next-line no-use-before-define
  saved: Question[];
  joinedAt: Date;
}

export interface Question {
  _id: string;
  title: string;
  content: string;
  tags: Tag[];
  view: number;
  upvotes: User[];
  downvotes: User[];
  author: User;
  answer: Answer[];
  createdAt: Date;
}
