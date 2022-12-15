import React, { useState, useEffect } from 'react';

function Posttable() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from the backend API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div className="card-deck  overflow-auto pt-2 " style={{ height: '100%' }}>
      {posts.map(post => (
        <div className="card m-4" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );}
export default Posttable