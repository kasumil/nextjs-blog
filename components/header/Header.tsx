import React from "react";
import { LinkTag } from "../link";

export default function Header() {
  return (
    <header className="px-10 py-5 w-full flex flex-wrap justify-between bg-black">
      <LinkTag href={"/"} className={`cursor-pointer`} Tag="h1" logo={true}>
        Suho's Next Blog
      </LinkTag>
      <div className="flex gap-16 text-text">
        <LinkTag href={"/posts"} className={`cursor-pointer`}>
          Posts
        </LinkTag>
        <LinkTag href={"/contact"} className={`cursor-pointer`}>
          Contact
        </LinkTag>
        <LinkTag href={"/login"} className={`cursor-pointer`} textColor={"text-yellow-500"}>
          Login
        </LinkTag>
      </div>
    </header>
  );
}
