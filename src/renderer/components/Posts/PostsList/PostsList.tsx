import React from 'react';
import Post, { PostTypes } from '../Post/Post';

interface Props {
  posts: PostTypes[];
}

const PostsList = (props: Props) => {
  const { posts } = props;

  return (
    <ul>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            tags={post.tags}
          />
        ))}
    </ul>
  );
};

export default PostsList;
