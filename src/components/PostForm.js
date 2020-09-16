import React, { useState } from "react";
import { connect } from "react-redux";
import { insertPost } from "../actions/postAction";

const PostForm = ({ insertPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <h1>Add Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const post = {
            title,
            body,
          };
          insertPost(post);
        }}
      >
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   newPost: state.reducer_post,
// });

export default connect(null, { insertPost })(PostForm);
