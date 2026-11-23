function Item({ name, isPacked }) {
  //if else statement use
  //   if (isPacked) {
  //     return <li className="item">{name} ✅</li>;
  //   }
  //   return <li className="item">{name}</li>;
  // ternari oparator use with jsx

  //   return (
  //     <li>
  //       {name}
  //       {isPacked ? "✅" : "❌"}
  //     </li>
  //   );

  // and oprator (&&)
  return (
    <li>
      {name}
      {isPacked && "✅"}
    </li>
  );
}
export default function Conditional() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
