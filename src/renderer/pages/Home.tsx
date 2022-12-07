import React, { useEffect, useState } from 'react';
import PostsList from 'renderer/components/Posts/PostsList/PostsList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts?limit=5');

      if (!response.ok) throw new Error('Something went wrong!!');

      const data = await response.json();

      console.log(data.posts);

      setPosts(data.posts);
    } catch (error) {
      console.log(error.message);
      console.log(error.cause);
    }
  };

  useEffect(() => {
    fetchPosts();

    return () => {};
  }, []);

  return (
    <div>
      <h1>Electron Test</h1>

      <PostsList posts={posts} />
    </div>
  );
};

export default Home;
