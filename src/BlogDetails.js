import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`); 

    return (
        <div className="blog-details">
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>written by {data.author}</p>
                    <div>{data.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;