import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = function () {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="Home">
      {error && <h2>{error}</h2>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} blogSectionTitle="All Blogs!" />}
    </div>
  );
};

export default Home;

// let [name, setName] = useState('Mario');
// const [age, setAge] = useState(25);

// const handleClick = function () {
//   setName('Luigi');
//   setAge(30);
//}

// <p>{name} is {age} years old</p>
// {
//   /* <button onClick={handleClick}>Click me</button> */
// }

// {blogs.map((blog) => (
//   <div className="blog-preview" key={blog.id}>
//     <h2>{blog.title}</h2>
//     <p>Written by {blog.author}</p>
//   </div>
// ))}
// {blogs.map(function (blog) {
//   return (
//     <div className="blog-preview" key={blog.id}>
//       <h2>{blog.title}</h2>
//       <p>Written by {blog.author}</p>
//     </div>
//   );
// })}
