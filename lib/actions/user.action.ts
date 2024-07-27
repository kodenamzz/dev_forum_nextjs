import { User } from "@/types";

export async function getUserById(params: { userId: string }): Promise<User> {
  try {
    const { userId } = params;

    const response = await fetch(`${process.env.API_ENDPOINT}/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const user = await response.json();
    return user as User;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
