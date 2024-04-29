// Header.tsx
import { usePost } from "./PostContext";
import Navbar from "./Navbar";

const Header = () => {
  const post = usePost();
  return (
    <header>
      {Navbar}
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
    </header>
  );
};

export default Header;
