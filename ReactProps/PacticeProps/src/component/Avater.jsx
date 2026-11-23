export default function Avater({ person, size }) {
  return (
    <div>
      <div>{person.name}</div>
      <div>{person.hobe}</div>
      <p>{size}</p>
    </div>
  );
}
