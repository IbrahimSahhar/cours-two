import React from "react";
import CustomHook from "../Hooks/CustomHook.js";
const Posts = () => {
  const [data] = CustomHook("https://jsonplaceholder.typicode.com/posts");
  return data.map((post) => <h5 key={post.id}>{post.title}</h5>);
};

export default Posts;
