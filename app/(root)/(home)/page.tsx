import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Node.js Vs Bun | Which one is better for creating APIs?",
    tags: [
      { _id: "1", name: "nodejs" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [{}, {}, {}],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to handle state in React?",
    tags: [
      { _id: "3", name: "react" },
      { _id: "4", name: "state-management" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    upvotes: 25,
    views: 2500,
    answers: [{}, {}, {}, {}],
    createdAt: new Date("2024-01-15T15:30:00.000Z"),
  },
  {
    _id: "3",
    title: "What is the best way to learn TypeScript?",
    tags: [
      { _id: "5", name: "typescript" },
      { _id: "6", name: "programming" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    upvotes: 40,
    views: 5000000,
    answers: [{}],
    createdAt: new Date("2024-07-10T12:00:00.000Z"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full justify-between gap-4 max-[450px]:flex-col-reverse sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900 text-nowrap max-[450px]:text-center">
          All Questions
        </h1>
        <Link href="/aks-question" className="flex justify-end max-sm:w-full ">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 max-[450px]:w-full">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Looping through questions */}
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} {...question} />
          ))
        ) : (
          <NoResult
            title="There are no question to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            buttonLink="/ask-question"
            buttonText="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
