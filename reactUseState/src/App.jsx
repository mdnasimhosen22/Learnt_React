import { useState } from "react";
import Gallery from "./componet/Gallery";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {" "}
      <Gallery
        index={index}
        setIndex={setIndex}
        showMore={showMore}
        setShowMore={setShowMore}
      />
      <br />
      <br />
      <hr />
      <Gallery
        index={index}
        setIndex={setIndex}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </>
  );
}
