"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface CustomInputProps {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}
const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"} ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        alt="search icon"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchBar;
