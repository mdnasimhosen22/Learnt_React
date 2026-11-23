import { useState } from "react";
import "./App.css";
import Travelplan from "./component/Travelplan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Travelplan />
    </>
  );
}

export default App;
