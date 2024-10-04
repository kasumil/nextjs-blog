import Image from "next/image";
import React from "react";

import IntroImage from "@/public/images/intro/suho_Image.png";

export const Intro: React.FC = () => {
  return (
    <section className="bg-gray-900	py-5 flex justify-center items-center flex-col">
      <div className="w-50 object-top">
        <Image priority src={IntroImage} alt="나의 소개 이미지" />
      </div>
      <div className="my-5 gap-3 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl text-center">
          안녕하세요.
          <br />
          송수호입니다
        </h1>
        <p className="text-white text-xl text-center">
          웹 개발자입니다.
          <br />
          해당 페이지는 프레임워크 Next.js로 만들었습니다
        </p>
      </div>
    </section>
  );
};
