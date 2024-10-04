import React from "react";
import PostGrid from "@/components/PostGrid";

export default function PostPage(): React.FC {
  const postdata = [
    {
      index: 1,
      image: "/images/post/getting-started-nextjs.png",
      title: "나의 첫 포트폴리오",
      time: "1564712",
      content: "다날 연동작업 진행",
    },
    {
      index: 2,
      image: "/images/post/getting-started-nextjs.png",
      title: "나의 두번쨰 포트폴리오",
      time: "1764712",
      content: "NFT마켓 진행",
    },
    {
      index: 3,
      image: "/images/post/getting-started-nextjs.png",
      title: "나의 세번쨰 포트폴리오",
      time: "194712",
      content: "스트리밍 업체 어드민 작성 진행",
    },
    {
      index: 4,
      image: "/images/post/getting-started-nextjs.png",
      title: "나의 4번쨰 포트폴리오",
      time: "204712",
      content: "트레이딩 백테스트 진행",
    },
    {
      index: 5,
      image: "/images/post/getting-started-nextjs.png",
      title: "나의 세번쨰 포트폴리오",
      time: "194712",
      content: "스트리밍 업체 어드민 작성 진행",
    },
    {
      index: 6,
      image: "/images/post/getting-started-nextjs.png",
      title: "나의 4번쨰 포트폴리오",
      time: "204712",
      content: "트레이딩 백테스트 진행",
    },
  ];
  return (
    <section className="bg-gray-200 py-4">
      <h1 className="text-4xl text-center my-5">전체 프로젝트</h1>
      <PostGrid posts={postdata} />
    </section>
  );
}
