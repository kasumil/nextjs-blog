import { PropsType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostItem: React.FC<PropsType> = (props) => {
  const { index, image, title, content, time } = props?.post;
  return (
    <li className="max-w-xl drop-shadow-lg bg-gray-500 hover:scale-105">
      <Link href={`/posts/${index}`}>
        <div>
          <Image layout="responsive" width={16} height={9} src={image} alt={title} />
        </div>
        <div className="p-3 text-white text-center gap-5">
          <h3 className="text-2xl">{title}</h3>
          <time>{time}</time>
          <p>{content}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
