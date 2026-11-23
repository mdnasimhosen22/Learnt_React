// amadei ei code hoito kaj korchhe but ei khane bug howar jhuki ta aktu beshi
// jodi setIsSent and setIsSending ak shathe call korte vulei jai tobe code bug asbe
//contradictions sate avoid korbo
// amara ei 2 ta soburodhi state ei pori borte status name akta state use kore ei 2 ta state er kaj korte pari

import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStateus] = useState("typing");
  //   const [isSending, setIsSending] = useState(false);   ei dui ta state usse na kore upore ststus akta state use korte pari ta hole ei onakhangkhhito bug asar change thakbe na
  //   const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // setIsSending(true);    ei line na likhe
    setStateus("sending");
    await sendMessage(text);

    //setIsSending(false); // ei set function call korte vule jai ba true kore dwa hoi to onakangkhhito error ba bug asbe ja developer er vul korar somdhona bariye dei
    // setIsSent(true); ei line na likhe
    setStateus("sent");
  }
  const isSending = status === "sending";
  const isSent = status === "sent";
  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
