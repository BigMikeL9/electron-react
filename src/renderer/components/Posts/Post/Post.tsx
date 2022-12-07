import React from 'react';
import { PostTitle } from './Post.style';

export interface PostTypes {
  id?: number;
  title: string;
  body: string;
  tags: string[];
}

const Post = (props: PostTypes) => {
  const { title, body, tags } = props;

  return (
    <li>
      <PostTitle>{title}</PostTitle>
      <p>{body}</p>

      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </li>
  );
};

export default Post;
