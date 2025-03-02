import { useState } from "react";

export default function Facts() {
  const [path, setPath] = useState("facts");

  const handleClick = (value: string) => {
    setPath(value);
  };

  return (
    <>
      <h2>Facts</h2>
      <menu>
        <button onClick={() => handleClick("personal")}>Personal</button>
        <button onClick={() => handleClick("summary")}>Summary</button>
        <button onClick={() => handleClick("jobs")}>Jobs</button>
        <button onClick={() => handleClick("education")}>Education</button>
        <button onClick={() => handleClick("skills")}>Skills</button>
      </menu>

      <div>{path}</div>
    </>
  );
}
