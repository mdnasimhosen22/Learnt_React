import FeedbackForm from "./component/FeedbackForm";
import Form from "./component/Form";
import Form2 from "./component/Form2";
import TravelEditable from "./component/TravelEditable";

function App() {
  return (
    <>
      {/* <PonterMove /> */}
      <Form />
      <FeedbackForm />{" "}
      {/*contradictions sate avoid korbo ba sobidorhi state  */}
      <Form2 />
      <TravelEditable />
    </>
  );
}

export default App;
