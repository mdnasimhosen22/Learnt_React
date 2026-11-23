import { useState } from "react";
import Panel from "./Panel";
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Panel
        title="About Me"
        isActive={activeIndex === 0 && true}
        onhandle={() => setActiveIndex(0)}
      >
        {" "}
        Hi i am Nasim Hosen . I am full stack developer.i like programing and
        strady new programing conseft
      </Panel>
      <Panel
        title="My skill"
        isActive={activeIndex === 1 && true}
        onhandle={() => setActiveIndex(1)}
      >
        {" "}
        "html" "CSS" "JavaScript" "React" is learning naw
      </Panel>
    </>
  );
}
