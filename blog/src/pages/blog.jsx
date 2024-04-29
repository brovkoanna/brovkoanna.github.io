import Layout from "../components/Layout";
import Posts from "../components/Posts";

function Blog() {
  const blogName = "Назва вашого блогу";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );
}
