import About from '@/components/home/About';
import PostListLayout from '@/components/post/PostListLayout';
import { getPosts } from '@/utils/getPosts';
import React from 'react';

const HomePage = () => {
  const posts = getPosts();
  console.log(posts);

  return (
    <div>
      <About />
      <PostListLayout posts={posts} />
    </div>
  );
};

export default HomePage;
