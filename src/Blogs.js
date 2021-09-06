import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Blogs = () => {
  const { data: blogs, isPending, errors } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="blogs-container">
      {isPending && <h1>Loading ...</h1>}
      {errors && <h1>{errors}</h1>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
}

export default Blogs;