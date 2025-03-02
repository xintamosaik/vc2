import { useState } from "react";
import "./App.css";
import View from "./View";

function App() {
  const [path, setPath] = useState("facts");

  const handleClick = (value: string) => {
    setPath(value);
  };

  return (
    <>
      <h1>Very Curriculum</h1>
      <menu>
        <button onClick={() => handleClick("facts")}>Facts</button>
        <button onClick={() => handleClick("story")}>Story</button>
        <button onClick={() => handleClick("style")}>Style</button>
        <button onClick={() => handleClick("preview")}>Preview</button>
        <button onClick={() => handleClick("help")}>Help</button>
        <button onClick={() => handleClick("about")}>About</button>
      </menu>

      <View path={path}></View>
    </>
  );
}

export default App;
