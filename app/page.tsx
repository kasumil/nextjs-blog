import { Intro } from "@/components/Intro";
import PostsPage from "./posts/page";
import { Featured } from "@/components/Featured";

export default function Home() {
  return (
    <>
      <Intro />
      <Featured />
    </>
  );
}
