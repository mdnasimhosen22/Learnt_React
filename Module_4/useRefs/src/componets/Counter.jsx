import { useRef, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  let ref = useRef(0);
  // function handleClcik() {
  //   setCount(count + 1);
  // }

  function handleCount() {
    ref.current = ref.current + 1;
    console.log("current value = " + ref.current);
    setCount((prev) => {
      console.log("prev = " + prev);
      return prev + 1;
    });
  }
  return (
    <>
      {/* <button onClick={handleClcik}>Click me ! {count}</button> */}
      <button onClick={handleCount}>Click me ! {count}</button>
    </>
  );
}
