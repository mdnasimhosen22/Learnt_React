import { useState } from "react";
import { initialTravelPlan } from "../data/place-normalize";
import PlaceTree from "./PlaceTree";
export default function Travelplan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((placeId) => (
          <PlaceTree
            key={placeId}
            id={placeId}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
