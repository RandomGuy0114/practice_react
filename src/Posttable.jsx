import React, { useState, useEffect } from 'react';

function PostTable() {
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

  function UserInfo() {
    const [user, setUser] = useState({
      name:"Mike Denum",
      email:"mtd@gmail.com",
      bio:"Passionate coder"
    });
  
    return (
      <div className="col mx-2 p-2 my-4">
        <div className="card mx-4 p-4">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>
      </div>
    );
  }
  
  function Time() {
    const d = new Date();
    let time = d.toLocaleTimeString();
  
    let date = d.toLocaleDateString('default', {year:"numeric", month:"long", day:"numeric"});
    
    return (
      <div className="col mx-2 p-2 my-4">
        <div class="card mx-4 p-4">
          <p className="text-center">{time}</p>
          <p className="text-center">{date}</p>
        </div>
      </div>
    );
  }
    

export {PostTable, UserInfo, Time};
