// Layout.tsx
import { useState, useEffect } from "react";
import Header from "./Header";
import PostTitle from "./PostTitle";
import PostMain from "./PostMain";

const Layout = () => {
  const [likes, setLikes] = useState(0);
  const likeThis = () => {
    setLikes(likes + 1);
  };
  useEffect(() => {
    document.getElementById("like")?.addEventListener("click", () => {
      likeThis();
    });
  }, []);
  return (
    <article className="post">
      <Header />
      <div className="post-footer">
        <PostTitle />
        <PostMain />
        <button id="like">
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
};

export default Layout;
