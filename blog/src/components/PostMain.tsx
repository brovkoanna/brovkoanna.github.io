// PostMain.tsx
import { usePost } from "./PostContext";

const PostMain = () => {
  const post = usePost();
  return <p>{post.content}</p>;
};

export default PostMain;
