import React from "react";
import PostItem from "./PostItem";
import { PropsType } from "@/types/type";

const PostGrid: React.FC<PropsType> = (props) => {
  const { posts } = props;

  return (
    <ul className="grid gap-4 grid-cols-3 mx-auto max-w-7xl">
      {posts.map((post) => (
        <PostItem post={post} key={post.index} />
      ))}
    </ul>
  );
};

export default PostGrid;
