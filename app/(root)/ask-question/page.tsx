import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const appUser = await getUserById({ userId: user.id });

  console.log("appUser", appUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={appUser._id} />
      </div>
    </div>
  );
};

export default AskQuestion;
