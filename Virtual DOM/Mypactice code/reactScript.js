const domConteiner = document.getElementById("root");

const Fruit = () => {
  const [fruit, setFruit] = React.useState("");
  const [fruits, setFruits] = React.useState([
    "mango",
    "banana",
    "orenge",
    "Apple",
  ]);
  return (
    <div className="container">
      <ul id="fruits">
        {fruits.sort().map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
      <br />
      <p>
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
      </p>
      <button onClick={() => setFruits([...fruits, fruit])}>Add Item</button>
    </div>
  );
};

ReactDOM.render(<Fruit />, domConteiner);
