import { useState, useEffect } from "react";
import { PostContext } from "./PostContext";
import Layout from "./Layout";

function Post() {
  const [post, setPost] = useState({});

  const fetchData = async (url: any) => {
    const data = await (await fetch(url)).json();
    setPost(data);
  };

  useEffect(() => {
    fetchData(
      "https://my-json-server.typicode.com/brovkoanna/brovkoanna.github.io/posts/1"
    );
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout />
    </PostContext.Provider>
  );
}

export default Post;
