import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setisPending] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    setisPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setisPending(false);
      history.push('/');
    });
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="Solid Snake">Solid Snake</option>
          <option value="chicken fillet">chicken fillet</option>
          <option value="Sonic">Sonic</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding blog now...</button>}
      </form>
    </div>
  );
}

export default Create;
