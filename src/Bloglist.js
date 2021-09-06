import { Link } from "react-router-dom"

const Bloglist = ({ blogs }) => {
  return (
    blogs.map((blog) => {
      return (
        <div className="blog-body" key={blog.id}>
          <div className="blog-title">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </div>
          <div className="blog-writer">
            by {blog.writer}
          </div>
        </div>
      )
    })
  );
}

export default Bloglist;