import { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);
  let post = {
    id: 1,
    title: "Programming Algorithm",
    content: `The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.`,
    cover: "/vite.svg",
    likes: 5,
  };
  return (
    <>
      <Post post={post} key={post.id} />
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        Testmkemgdlmh;lft;lhg
      </div>
    </>
  );
}

export default App;
