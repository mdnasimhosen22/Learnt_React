// code oprojonio sate use kora valo na je state agei sate ei madhomei kora jai oi sate use kora thik na ete bug howar chanch thake

//   const [fullName, setFullName] = useState(""); ei rokom akata sate use kora kono proyojon nai ba  (redundant) ei ta akta extran kaj amar chailei firstname and last name join kore full name kore felte pari

// render er time je value calculate kora hoi oi ta state e rakha  redundant oi ta satte na rakhai valo ete state kom hoi

import { useState } from "react";

export default function Form2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  // derived state or calculated state mane je state calculet kore ber kore ana hoi
  const fullName = firstName + " " + lastName;

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <br />
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
