import { useRef } from "react";
export default function DomRef() {
  const MyRef = useRef(null);
  function handleDiv(params) {
    MyRef.current.textContent = "hello react";
  }
  return (
    <>
      {" "}
      <div ref={MyRef}>Hello</div>
      <button onClick={handleDiv}>Div Click</button>
    </>
  );
}
