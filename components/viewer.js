// components/Viewer.js
import React from "react";
import ReactMarkdown from "react-markdown";

const Viewer = ({ content }) => {
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Viewer;
