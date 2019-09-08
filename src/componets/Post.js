import React from "react";

const styles = {
  borderBottom: "2px solid #eee",
  background: "dimgray",
  margin: ".75rem auto",
  padding: ".6rem 1rem",
  maxWidth: "500px",
  borderRadius: "7px",
  color: "white"
};

export default ({ post: { title, mobile, body, id }, onDelete}) => {
  return (
    <div style={styles}>
      <h6>{ id }</h6>
      <h2>{title}</h2>
      <h4>{ mobile }</h4>
      <p>{body}</p>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => onDelete(id)}
      >
        Remove
      </button>
    </div>
  );
};