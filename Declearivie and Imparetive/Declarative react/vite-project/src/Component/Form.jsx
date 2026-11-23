import { useState } from "react";

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "pabna") {
        resolve();
      } else {
        reject(new Error("worng anser ! try again"));
      }
    }, 3000);
  });
}
export default function Form() {
  // typing,sunmitng,success

  //mandaotry data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  // handele function
  function handleTextChange(e) {
    setError("");
    setAnswer(e.target.value);
  }
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    setStatus("submiting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error.message);
    }
  };

  if (status === "success") return <h1>That's right!</h1>;
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form onSubmit={handleFromSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submiting"}
        ></textarea>
        <br />
        <button disabled={answer === "" || status === "submiting"}>
          Submit
        </button>
        {status === "submiting" && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
}
