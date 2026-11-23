import JsObjectBracket, { ImageJoin } from "./component/JsObjectBracket";
import JsxCurlyBraces from "./component/JsxCurlyBraces";
import TodoList from "./component/TodoList";

function App() {
  return (
    <>
      <TodoList />
      <JsxCurlyBraces />
      <JsObjectBracket />
      <br />
      <ImageJoin />
    </>
  );
}

export default App;
