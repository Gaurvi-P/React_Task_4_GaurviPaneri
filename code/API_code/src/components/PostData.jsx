import React, { useEffect, useState } from "react";

function PostData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h2>{post.id}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostData;