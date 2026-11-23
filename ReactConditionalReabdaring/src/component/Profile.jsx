import Avater from "./Avater";
import Lang from "./Lang";

export default function Profile(props) {
  return (
    <div>
      <Avater {...props} />
      <Lang person={props.person} />
    </div>
  );
}
