function Button({ onSmash, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}
    >
      {children}
    </button>
  );
}

export default function StopPropagation() {
  return (
    <div onClick={() => alert("you called parent div")}>
      <Button onSmash={() => alert("only call Button component")}>click</Button>
      <br />
      <br />
      <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
