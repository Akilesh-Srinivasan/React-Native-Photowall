import React, { Component } from "react";
import PropTypes from 'prop-types'

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" alt={post.description} src={post.imageLink} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="buttonContainer">
        <button onClick={() => {
          props.removePosts(props.index)
        }}>Remove</button>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Photo;
