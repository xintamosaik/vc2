import { useState } from "react";
export default function Personal() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  return (
    <>
      <h3>Personal</h3>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1em" }}
        onSubmit={(e) => {
          e.preventDefault;
          alert(`The name you entered was: ${name}`);
        }}
      >
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <input type="submit" />
      </form>
    </>
  );
}
