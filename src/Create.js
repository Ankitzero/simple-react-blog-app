import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [body, setBody] = useState("");
    const [loader, setLoader] = useState(false);
    function handelSubmit(e) {
        e.preventDefault();
        setLoader(true);
        const blog = {title, writer, body};
        setTimeout(() => {
            fetch("http://localhost:8000/blogs/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            })
            .then(() => {
                setLoader(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoader(false);
            })
        },1000);
    }
    return (
        <div className="blog-detail-container">
            <div className="blog-detail">
                <h1>
                    Create Blog
                </h1>
            </div>
            <form className="form-flex" onSubmit={(e) => handelSubmit(e)}>
                <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} required="required" placeholder="Title"/>
                <input type="text" value={writer} name="writer" onChange={(e) => setWriter(e.target.value)} required="required" placeholder="Writer"/>
                <textarea value={body} name="body" onChange={(e) => setBody(e.target.value)} required="required" placeholder="Content"></textarea>
                { !loader && <button className="form-submit">Create</button>}
                { loader && <button className="form-submit" disabled>Creating Blog</button>}
            </form>
        </div>
    );
}

export default Create;