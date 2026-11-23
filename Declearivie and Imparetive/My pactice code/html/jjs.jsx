import { useState } from "react";
export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        First name:{" "}
        {isEditing ? (
          <input
            value={fristName}
            onChange={(e) => setFristName(e.target.value)}
          />
        ) : (
          <b>fristName</b>
        )}
      </label>
      <label>
        Last name:{" "}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>lastName</b>
        )}
      </label>

      <button type="submit">{isEditing ? "save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {fristName} {lastName}
        </i>
      </p>
    </form>
  );
}
