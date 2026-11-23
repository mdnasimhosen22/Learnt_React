import "./App.css";
import Conditional from "./component/Conditional";
import JsxNullReturn from "./component/JsxNullReturn";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      <Profile
        person={{ name: "nahid", hobe: "software------- dev or programmer" }}
        size={100}
      />
      <br />
      <Conditional />
      <br />
      <JsxNullReturn />
    </>
  );
}

export default App;
