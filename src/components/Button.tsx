import { FC } from "react";
import Link from "next/link";

const Button: FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <button className=" mx-4 my-4  px-7 py-2 rounded-full bg-emerald-500 hover:text-gray-100 hover:cursor-pointer  hover:bg-emerald-500 hover:scale-150 hover: duration-500 ">
      <Link href={link}>{text}</Link>
    </button>
  );
};
export default Button;
