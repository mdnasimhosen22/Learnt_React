const person = {
  name: "namsim",
  age: 20,
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const txt = "Improve the videophone";
export default function JsObjectBracket() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s To dos</h1>
      <img
        className="avatar"
        src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>{txt}</li>
        <li>{txt}</li>
        <li>{txt}</li>
      </ul>
    </div>
  );
}

const baseUrl = "https://react.dev/images/docs/scientists/";
const person1 = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function ImageJoin() {
  return (
    <div style={person1.theme}>
      <h1>{person1.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person1.imageId + person1.imageSize + ".jpg"}
        alt={person1.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
