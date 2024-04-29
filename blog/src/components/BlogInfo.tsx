function BlogInfo() {
  const blogName = useContext(BlogContext);

  return <span className="text-3xl">{blogName}</span>;
}
