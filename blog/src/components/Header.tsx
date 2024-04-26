// Header.tsx
import { usePost } from "./PostContext";

const Header = () => {
  const post = usePost();
  return (
    <div className="cover-container">
      <img src={post.cover} alt={post.title} />
    </div>
  );
};

export default Header;
