import PostListLayout from '@/components/post/PostListLayout';
import { getPosts } from '@/utils/getPosts';
import React from 'react';

const HomePage = () => {
  const posts = getPosts();

  return (
    <div>
      <PostListLayout posts={posts} />
    </div>
  );
};

export default HomePage;
