import { useState } from "react";
import Counter2 from "./Counter2";

// ei khane react sate reset korar 2 ta option dewa holo
// react by default vabe akoi position componet render hole tar state save kore rakhe but jodi kono projon hoi je ei defualt achoron change korte hoi tobe amara 2 ta option ei hehaviors change korte pari
// 1 componet diffent possition reder kore
// 2 key use kore
export default function Scoreboard() {
  const [isPlayerA, setIsPLayerA] = useState(true);
  return (
    <div className="flex">
      {/* ei khane akta martor componet render hoche hoi eta na hoi oi ta tai sate er kono change hochhe na karon akoi possition e ache  */}
      {isPlayerA ? <Counter2 person="Taylor" /> : <Counter2 person="Sarah" />}

      {/* ei kahane dui ta alada possition componet renter korchhe tai react state alada vabe majhe korbe  */}
      {isPlayerA && <Counter2 person="nasim" />}
      {!isPlayerA && <Counter2 person="raihan" />}

      {/* but ei khane key er majhe react k bolchhi sono ei dui ta alada tumi state alada manage koraba tai tui ta alada manage hoi */}
      {isPlayerA ? (
        <Counter2 key="Taylor" person="siam" />
      ) : (
        <Counter2 key="Sarah" person="sohan" />
      )}
      <button
        className="btn"
        onClick={() => {
          setIsPLayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}
