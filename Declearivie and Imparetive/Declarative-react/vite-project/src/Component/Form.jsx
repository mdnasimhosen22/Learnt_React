export default function Form({ status = "empty" }) {
  // emptyt,typing,sunmitng,success,error
  if (status === "succes") return <h1>That's right!</h1>;
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form>
        <textarea></textarea>
        <br />
        <button>Submit</button>
        <p>Loading...</p>
        <p className="Error">Thera was an Error</p>
      </form>
    </>
  );
}
