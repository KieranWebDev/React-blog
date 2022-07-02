import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  function handleClick() {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  }
  return (
    <div className="blog-details">
      {error && <h2>{error}</h2>}
      {isPending && <div>Loading...</div>}

      {blog && (
        <article>
          <h3>Blog number: {id}</h3>
          <h2>{blog.title}</h2>
          <p>Written by{blog.author}</p>
          <div>
            <p>{blog.body}</p>
          </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;
