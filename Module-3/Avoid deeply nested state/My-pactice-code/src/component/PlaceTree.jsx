export default function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];

  const childIds = place.childIds;

  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
