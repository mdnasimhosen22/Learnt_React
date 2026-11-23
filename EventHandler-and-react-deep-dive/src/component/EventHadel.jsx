function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}
function PlayButton({ frienName }) {
  function handelClick() {
    console.log(`Calling ${frienName}`);
  }
  return <Button onSmash={handelClick}>call "{frienName}"</Button>;
}
function Upload({ frienName }) {
  return (
    <Button onSmash={() => alert(`Uploading img ${frienName}`)}>
      Upload Image
    </Button>

  );
}
export default function EventHadel() {
  return (
    <div>
      <PlayButton frienName={"Siam"} />
      <Upload frienName={"shohan"} />
    </div>
  );
}
