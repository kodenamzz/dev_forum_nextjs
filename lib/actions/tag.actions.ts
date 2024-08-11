import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    console.log("params", params);

    //   const user = await User.findById(userId);

    //   if(!user) throw new Error("User not found");

    // Find interactions for the user and group by tags...
    // Interaction...
    // const { userId } = params;

    // const response = await fetch(
    //   `${process.env.API_ENDPOINT}/tags/top-interacted/${userId}`
    // );

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    // const user = await response.json();
    return [
      { _id: "1", name: "tag" },
      { _id: "2", name: "tag2" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
