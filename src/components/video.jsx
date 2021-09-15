import React from "react";

const Video = ({ id }) => {
  return (
    <iframe
      type="text/html"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allowFullscreen
    ></iframe>
  );
};

export default Video;
