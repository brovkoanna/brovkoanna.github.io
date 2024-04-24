import { useState, useEffect } from "react";

function Post(props: any) {
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);

  //const { likes, id, title, cover, content } = props.post;

  const fetchData = async (url: string) => {
    const data = await (await fetch(url)).json();
    setPost(data);
  };

  const likeThis = () => {
    setLikes(likes + 1);
  };

  useEffect(() => {
    fetchData(
      "https://my-json-server.typicode.com/brovkoanna/brovkoanna.github.io/posts/1"
    );
  }, []);

  useEffect(() => {
    document.getElementById("like")?.addEventListener("click", () => {
      likeThis();
    });
  }, []);

  return (
    <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {post.title} {post.id}
        </h3>
        <p>{post.content}</p>
        <button id="like">
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
}

export default Post;
