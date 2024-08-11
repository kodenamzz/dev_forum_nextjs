import { IUser } from "@/types";
import { GetAllUsersParams } from "./shared.types";

export async function getUserById(params: { userId: string }): Promise<IUser> {
  try {
    const { userId } = params;

    const response = await fetch(`${process.env.API_ENDPOINT}/users/${userId}`);

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
    const searchParams = new URLSearchParams(
      Object.entries(params).reduce(
        (acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        },
        {} as Record<string, string>
      )
    ).toString();

    const response = await fetch(
      `${process.env.API_ENDPOINT}/users?${searchParams}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    return { users: users as IUser[] };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
