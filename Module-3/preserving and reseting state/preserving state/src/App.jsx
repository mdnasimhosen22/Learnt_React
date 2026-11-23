import { useState } from "react";
import "./App.css";
import CounterFancyStyling from "./Component/CounterFancyStyling";
import "./style.css";
function App() {
  // const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  return (
    // ei ta holo amder render tree fist div than tar majhe duita counter componet ache jodio counter akoi state ache but dui ta sompurno alada vabe manage hobe . karon amara jani reate state componet er majhe thake na ei ta (jokhon render tree create hoi tokhon react nije state tar majhe dharon kore rakhe and render howar por oi state gulo right componet er sathe join kore dei) react manage nije manage kore . render tree je possion e state thake thik oi possion e jeta update hoi sudhu oin ta poriboton hoi r baki gulo kono change hoi na .
    // In React, each component on the screen has fully isolated state.
    // same possion e same componet render hobe reate tar state save kore rakhe be otherwise ta destroy kore dibe

    // <div>
    //   <Counter /> {/* (render tree) first possion */}
    //   <Counter /> {/* (render tree) second possion */}
    // </div>

    // ei khane jokhon checkbox ti true thakche (tic thakchhe) tokhon amar second componet ta dekha jachh and state ta viable hochhe but jokhon checkbox false (uncheck ) tokhon amara componet remove kore felchhi . tai abar jokhon check korchhi mane componet file anchhi to react ei ta rendet tree te new vabe bosai tai ager sob state moche jai sate aba 0 theke start hoi.

    // <div>
    //   <CounterCheckBox />
    //   {showB && <CounterCheckBox />}
    //   <label>
    //     <input
    //       type="checkbox"
    //       checked={showB}
    //       onChange={(e) => setShowB(e.target.checked)}
    //     />
    //     Render the second counter
    //   </label>
    // </div>

    //Same component at the same position preserves state
    <div>
      {isFancy ? (
        <CounterFancyStyling isFancy={true} />
      ) : (
        <CounterFancyStyling isFancy={false} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => setIsFancy(e.target.checked)}
        />
        Use fancy styling
      </label>
    </div>
  );
}

export default App;
