export default function Panel({ title, children, isActive, onhandle }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      {isActive ? <p>{children}</p> : <button onClick={onhandle}>show</button>}
    </section>
  );
}
