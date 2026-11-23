import { useState } from "react";
import Chat from "../Component/Chat";
import ContactList from "../Component/ContactList";
import "../style3.css";
export default function App3() {
  const [to, setTo] = useState(contacts[0]);

  // lifting state up pattern use kore child componet state parent manage kore fole amara ager valu pore abar dekhate apri
  const [texts, setTexts] = useState({}); // chat componet state ei parent e rakhchhi karon amar jokhon ta ta state save korchi tokhon r date delete hochhe na jodi o onno arenta input fild e giye state update kori
  // chaile porer data abar dekhte pari
  const currentText = texts[to.id] || "";
  const handleTextChange = (newText) => {
    return setTexts((prev) => ({
      ...prev, // spreed oparator use kore agei ta sob ui e dewa hochhe fole agei and porer dui ta data theke jachchhe
      [to.id]: newText, // nirdisto id dhore data update hochhe
    }));
  };
  return (
    // amader example dui ta componet render tree akoi postion e achhe componet render howar por o tader possition akoi thake tai teact ta det text sate k kono chanje kore na . tai jokhon amader on li item selet koro taw amader text gulo state save thake
    // ei ta sohojei key er majhe solve kore fel te pari
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      {/* ei khane ta akta key value add korlei ract ei ta differnt sate sibe count korbe */}
      {/* <Chat contact={to} /> */}
      <Chat contact={to} text={currentText} setText={handleTextChange} />
      {/*sob gulo chat component e props hisebe pathiye dewa hochche */}
    </div>
  );
}

const contacts = [
  { id: 0, name: "nasim", email: "nasim@mail.com" },
  { id: 1, name: "siam", email: "siam@mail.com" },
  { id: 2, name: "ratul", email: "ratul@mail.com" },
];
