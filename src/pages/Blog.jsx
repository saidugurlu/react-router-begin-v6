import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link to="/blog/1">
            PostID-1
          </Link>
        </li>
        <li>
          <Link to="/blog/2">PostID-2</Link>
        </li>
        <li>
          <Link to="/blog/3">PostID-3</Link>
        </li>
      </ul>
    </>
  );
}

export default Blog;
