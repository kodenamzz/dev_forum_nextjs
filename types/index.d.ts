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

export interface IUser {
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
  saved: IQuestion[];
  joinedAt: Date;
}

export interface ITag {
  _id: string;
  name: string;
  description?: string;
  // eslint-disable-next-line no-use-before-define
  questions: IQuestion[];
  followers: IUser[];
  createdOn: Date;
}

export interface IAnswer {
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
  saved: IQuestion[];
  joinedAt: Date;
}

export interface IQuestion {
  _id: string;
  title: string;
  content: string;
  tags: ITag[];
  views: number;
  upvotes: IUser[];
  downvotes: IUser[];
  author: IUser;
  answers: IAnswer[];
  createdAt: Date;
}
