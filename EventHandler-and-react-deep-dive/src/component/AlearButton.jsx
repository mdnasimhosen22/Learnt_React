// MessageShow function er majhe handelMessage akti handler funct ja akti event handle kore and button er onClick e ei handler function props hosebe pathano hoichhe

function MessageShow({ message, children }) {
  function handelMessage() {
    alert(message);
  }
  return <button onClick={handelMessage}>{children}</button>;
}

export default function AlearButton() {
  return (
    <div>
      {/* akti function er maddhome props pass kore akkadhik akjm kora no jai event handle er maddhome  */}
      <MessageShow message={"allahhu akbar! allahhu akbar!"}>
        click here
      </MessageShow>
      <MessageShow message={"chubhan allah ,allahhu akbar,alhamdulillah"}>
        soyab nite chaw...
      </MessageShow>
      <MessageShow message={"Mohammadur rosullulah sollallahu alaihiwachallam"}>
        who is big lader
      </MessageShow>
    </div>
  );
}
