export default function Fromsubmit() {
  const handleSubmuit = (e) => {
    e.preventDefault();
    alert("form submited");
  };
  return (
    <form onSubmit={handleSubmuit}>
      <input />
      <button>submite</button>
    </form>
  );
}
