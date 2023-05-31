// components/Editor.js
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Editor = ({ onContentChange }) => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onContentChange(newContent);
  };

  return (
    <div>
      <textarea value={content} onChange={handleContentChange} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Editor;
