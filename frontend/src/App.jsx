import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Markdown from "react-markdown";
import axios from "axios";
import "./App.css";

function App() {
  const [review, setReview] = useState(``);
  const [code, setCode] = useState(`function sum(){
                return 2+2;
              }`);

  useEffect(() => {
    prism.highlightAll();
  });

 async function reviewCode() {
  const API_BASE = import.meta.env.PROD
    ? `${import.meta.env.VITE_API_URL}/ai/get-review`
    : "http://localhost:3000/ai/get-review"; // Local backend

  console.log("API_BASE value:", API_BASE);

  try {
    const response = await axios.post(API_BASE, { code });
    setReview(response.data);
  } catch (err) {
    console.error("API error:", err);
    setReview("❌ Failed to fetch review. Check console.");
  }
}




  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "0.7rem",
                overflow: "auto",
                height: "100%",
                width: "100%",
              }}
            />
          </div>

          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
