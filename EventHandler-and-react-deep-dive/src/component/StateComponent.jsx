import { useState } from "react";
import { sculptureList } from "../data/data.js";
export default function StateComponent() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleClick() {
    setIndex((index + 1) % 12);
  }
  function handleMore() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>

      <button onClick={handleMore}>{showMore ? "Hide" : "show"} details</button>
      <p>{showMore && sculpture.description}</p>
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
