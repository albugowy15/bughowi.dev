import Link from "next/link";
import { useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineClose } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="bg-red-300 flex justify-between items-center p-4">
        <div className="flex items-center justify-start gap-1">
          <TbBrandNextjs size={35} />
          <p className="font-bold text-xl">bughowi.dev</p>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex justify-around gap-3">
            <li className="">
              <Link href="/">
                <p className="hover:bg-clip-text hover:bg-gradient-to-r hover:from-redAccent hover:via-yellowAccent hover:to-blueAccent hover:text-transparent hover:cursor-pointer">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="sm:hidden block">
          <AiOutlineMenu size={20} />
        </div>
      </div>
      <div
        className={
          nav
            ? "absolute flex w-screen h-screen top-0 bg-black bg-opacity-60"
            : "hidden"
        }
      >
        <div className="bg-darkPrimary w-[70%] p-5">
          <div className="flex justify-between items-center mb-5">
            <p className="text-xl font-bold">bughowi.dev</p>
            <button className="bg-darkSecondary p-3 rounded-full">
              <MdOutlineClose size={20} />
            </button>
          </div>
          <div>
            <div className="flex items-center gap-4 py-2 cursor-pointer">
              <AiOutlineHome size={20} />
              <p className="text-lg hover:border-b">Home</p>
            </div>
            <div className="flex items-center gap-4 py-2">
              <BsBook size={20} />
              <p className="text-lg">Blog</p>
            </div>
            <div className="flex items-center gap-4 py-2">
              <AiOutlineProject size={20} />
              <p className="text-lg">Projects</p>
            </div>
            <div className="flex items-center gap-4 py-2">
              <MdOutlineAccountCircle size={20} />
              <p className="text-lg">About</p>
            </div>
          </div>
          <button className="bg-blueAccent py-3 px-10 rounded-lg my-4 w-full tracking-wide font-bold">
            FOLLOW
          </button>
          <div className="flex items-center justify-start gap-4 my-4">
            <AiFillFacebook size={25} />
            <AiFillTwitterSquare size={25} />
            <FaInstagram size={25} />
            <AiFillGithub size={25} />
            <AiFillLinkedin size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
