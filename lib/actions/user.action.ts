import { IUser } from "@/types";
import { GetAllUsersParams } from "./shared.types";
import { createSearchParamsString } from "../utils";

export async function getUserById(params: { userId: string }): Promise<IUser> {
  try {
    const { userId } = params;

    const response = await fetch(
      `${process.env.API_ENDPOINT}/users/${userId}`,
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

    const user = await response.json();
    return user as IUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getAllUsers(params: GetAllUsersParams) {
  try {
    const searchParams = createSearchParamsString(params);
    const response = await fetch(
      `${process.env.API_ENDPOINT}/users${searchParams}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result as { users: IUser[]; isNext: boolean };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
