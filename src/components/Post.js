import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

const Post = ({ fetchPosts, allPosts, newPost }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const { items } = allPosts;

  return (
    <div>
      <h1>Posts</h1>
      {items.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  allPosts: state.reducer_post,
  newPost: state.reducer_post,
});

export default connect(mapStateToProps, { fetchPosts })(Post);
