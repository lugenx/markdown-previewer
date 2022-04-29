import React from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";

import "./App.css";

export const App = () => {
  const defaultText = `
  # Welcome to Markdown Previewer!
  ## You can do cool stuff here
    
  For example link like [this](https://www.google.com/)!
    
  or... maybe some inline code
  
  \`const likeThis = 1\`
  
  or.. maybe a code block:
  
  \`\`\`
  // this is multi-line code:
  
  function multiply(a, b) {
    return a * b;
  } 
  \`\`\`
  or.. a list:
  - like
  - this
  - one
    
   or... an image like this good boi:
   ![dogy](https://clubk9.com/wp-content/uploads/2018/04/Depositphotos_4953129_original-1-256x256.jpg)
   
  > or... a blockquote
  
  **and a bolded text of course!**`;

  const [markedText, setMarkedText] = React.useState(defaultText);

  function handleChange(event) {
    setMarkedText(event.target.value);
  }

  return (
    <div className="container-fluid">
      <div className="row header">
        <h2>Markdown Previewer</h2>
      </div>
      <div className="row">
        <div className="col">
          <Editor value={markedText} handleChange={handleChange} />
        </div>
        <div className="col">
          <Preview markedText={markedText} />
        </div>
      </div>
      <div className="row footer">
        <p>created by lugen</p>
      </div>
    </div>
  );
};
