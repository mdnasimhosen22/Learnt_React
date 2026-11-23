import { useState } from "react";

let nextId = 0;
export default function AddingItemToArray() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  return (
    <>
      <h2>Inspiring sculptors</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setArtists([
            ...artists,
            {
              id: nextId,
              name: name,
            },
          ]);
          setName("");
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
