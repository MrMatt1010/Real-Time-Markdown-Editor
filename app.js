// App.js
import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import Editor from "./components/Editor";
import Viewer from "./components/Viewer";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [content, setContent] = useState("");

  const handleAuthentication = (email, password) => {
    // Perform authentication logic here
    // If authentication succeeds, setAuthenticated(true)
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      {authenticated ? (
        <>
          <Editor onContentChange={handleContentChange} />
          <Viewer content={content} />
        </>
      ) : (
        <AuthForm onAuthenticate={handleAuthentication} />
      )}
    </div>
  );
};

export default App;
