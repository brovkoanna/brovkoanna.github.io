// PostTitle.tsx
import { usePost } from "./PostContext";

const PostTitle = () => {
  const post = usePost();
  return (
    <h3>
      {post.title} {post.id}
    </h3>
  );
};

export default PostTitle;
