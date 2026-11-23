export default function Chat({ contact, text, setText }) {
  return (
    <section>
      <textarea
        value={text}
        placeholder={"chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>sent to {contact.email}</button>
    </section>
  );
}
