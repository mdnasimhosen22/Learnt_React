import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function ItemInsertInArry() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);
  function handleClick() {
    const insetAt = 1;
    const nextArtists = [
      ...artists.slice(0, insetAt),
      { id: nextId++, name: name },
      ...artists.slice(insetAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
