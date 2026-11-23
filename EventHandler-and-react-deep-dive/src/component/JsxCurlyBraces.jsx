const today = new Date();
const name = "Hi I'am Nasim !!!";
function formatdate(date) {
  return new Intl.DateTimeFormat("en-us", { weekday: "long" }).format(date);
}
export default function JsxCurlyBraces() {
  return (
    <>
      <h1>Name is : {name}</h1>
      <h1>To Do list od {formatdate(today)}</h1>
    </>
  );
}
