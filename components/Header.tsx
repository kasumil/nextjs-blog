import React from "react";
import { LinkTag } from "./link";

export default function Header() {
  return (
    <header className="px-10 py-5 w-full flex flex-wrap justify-between bg-black">
      <LinkTag href={"/"} className={`cursor-pointer`} Tag="h1" logo={true}>
        <a>Suho's Next Blog</a>
      </LinkTag>
      <nav className="flex gap-16 text-text flex-wrap">
        <ul>
          <li>
            <LinkTag href={"/posts"} className={`cursor-pointer`}>
              Posts
            </LinkTag>
          </li>
          <li>
            <LinkTag href={"/contact"} className={`cursor-pointer`}>
              Contact
            </LinkTag>
          </li>
          <li>
            <LinkTag href={"/login"} className={`cursor-pointer`} textColor={"text-yellow-500"}>
              Login
            </LinkTag>
          </li>
        </ul>
      </nav>
    </header>
  );
}
