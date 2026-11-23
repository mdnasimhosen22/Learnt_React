import { sculptureList } from "../data";
export default function Gallery({ index, setIndex, showMore, setShowMore }) {
  function handleClik() {
    setIndex((index + 1) % sculptureList.length);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function handlePriveClik() {
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button
        className="border border-gray-400 text-white bg-gray-500 w-15 rounded-xl cursor-pointer mt-5 mr-5"
        onClick={handlePriveClik}
      >
        prev
      </button>
      <button
        className="border border-gray-400 text-white bg-gray-500 w-15 rounded-xl cursor-pointer mt-5"
        onClick={handleClik}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button
        className="border border-gray-400 text-white bg-gray-500 w-30 rounded-xl cursor-pointer mt-5"
        onClick={handleMoreClick}
      >
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
