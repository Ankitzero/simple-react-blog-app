import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import logo from "./delete.png";
const Blogdetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: blog, isPending, errors } = useFetch(`http://localhost:8000/blogs/${id}`);
    function handelDelete() {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: "DELETE"
        })
        .then(() => {
            history.push("/");
        })
    }
    return (
        <div className="blog-detail-container">
            {isPending && <h1>Loading ...</h1>}
            {errors && <h1>{errors}</h1>}
            {
                blog &&
                <div className="blog-detail">                    
                    <h1>
                        {blog.title} 
                    </h1>
                    <div className="blog-author">
                        by {blog.writer}
                    </div><br />
                    <div>
                        {blog.body}
                    </div>
                    <div className="blog-delete-button">
                        <img src={logo} onClick={() => handelDelete()} alt="delete" />
                    </div>
                </div>
            }
        </div>
    );
}

export default Blogdetails;