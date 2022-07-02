import { Link } from 'react-router-dom';

const BlogList = function ({ blogs, blogSectionTitle, handleDelete }) {
  return (
    <div className="blog-list">
      <h2>{blogSectionTitle}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
// {blogs.map(function (blog) {
//   return (
//     <div className="blog-preview" key={blog.id}>
//       <h2>{blog.title}</h2>
//       <p>Written by {blog.author}</p>
//     </div>
//   );
// })})
