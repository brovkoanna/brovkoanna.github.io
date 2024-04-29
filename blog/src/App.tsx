import { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);
  let post = {};
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
