"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Navbar {
  id: number;
  name: string;
  link: string;
}
export const NAV: Navbar[] = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 5, name: "ContactForm", link: "/ContactForm" },

  { id: 3, name: "My Todos", link: "/todos" },
  { id: 4, name: "Contact", link: "https://resume-shoaibmemon.vercel.app/" },
];

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className=" max-w-full top-0 left-0 ">
      <div className="md:flex items-center justify-between text-1xl lg:text-lg text-white bg-indigo-500  py-4 md:px-10 px-7">
        <Link href="/">Todo-App</Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
        </div>

        <ul
          className={` z-10 md:flex md:items-center md:pb-0 pb-12 text-white bg-indigo-500  absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {NAV.map((link) => (
            <li
              key={link.id}
              className="md:mr-20  text-1xl lg:text-lg md:my-0 my-7"
            >
              <Link
                href={link.link}
                className=" z-10 text-white bg-indigo-500  font-bold hover:text-gray-400 duration-500 hover:text-2xl 
                hover:translate-x-1 hover:underline hover:underline-offset-2 "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
