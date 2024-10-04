import React from "react";

interface PostsDetailProps {
  params: {
    id: number; // Ensure the id is the correct type (string if it's from URL params)
  };
}

export const PostsDetail: React.FC<PostsDetailProps> = ({ params }) => {
  return <div>PostsDetail</div>;
};
