import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineCopyright,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="text-center mx-auto p-5 mt-8">
      <h2 className="font-bold text-2xl">Stay in the Loop</h2>
      <p className="text-lg py-4">
        Subscribe to my newsletter for all the latest update
      </p>
      <form
        action=""
        className="mt-8 flex w-[80%] max-w-screen-sm mx-auto rounded-3xl items-center justify-between bg-white overflow-clip"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          className="flex-auto h-full pl-3 text-darkPrimary outline-none"
        />
        <button className="bg-red-500 flex-none py-2 px-4 font-bold">
          Sign Up
        </button>
      </form>
      <p className="mt-8">Find Me!</p>
      <div className="flex items-center justify-center gap-2 mt-3">
        <a
          href="https://facebook.com/muhammad.bugowy/"
          className="bg-blue-700 rounded-full p-3"
        >
          <FaFacebookF size={15} />
        </a>
        <a
          href="https://facebook.com/muhammad.bugowy/"
          className="bg-sky-500 rounded-full p-3"
        >
          <FaTwitter size={15} />
        </a>
        <a
          href="https://facebook.com/muhammad.bugowy/"
          className="bg-pink-600 rounded-full p-3"
        >
          <FaInstagram size={15} />
        </a>
        <a
          href="https://facebook.com/muhammad.bugowy/"
          className="bg-slate-800 rounded-full p-3"
        >
          <FaGithub size={15} />
        </a>
        <a
          href="https://facebook.com/muhammad.bugowy/"
          className="bg-blue-900 rounded-full p-3"
        >
          <FaLinkedinIn size={15} />
        </a>
      </div>
      <p className="text-sm mt-8 opacity-60">
        <span>
          <AiOutlineCopyright className="inline" />
        </span>{" "}
        2022 bughowi.dev - Built with Next.js, Tailwind, GraphCMS, Vercel
      </p>
    </div>
  );
};

export default Subscribe;
