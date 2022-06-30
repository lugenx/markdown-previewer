import React, { useState } from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";
import { defaultText } from "./defaultText";

export const App = () => {
  const [markedText, setMarkedText] = useState(defaultText);

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
