import AddingItemToArray from "./component/AddingItemToArray";
import BucketList from "./component/BucketList";
import CounterList from "./component/CounterList";
import ItemInsertInArry from "./component/ItemInsertInArry";
import RemoveItemInArray from "./component/RemoveItemInArray";
import TransformingArray from "./component/TransformingArray";

export default function App() {
  return (
    <>
      <AddingItemToArray />
      <hr />
      <RemoveItemInArray />
      <hr />
      <TransformingArray />
      <hr />
      <CounterList />
      <hr />
      <ItemInsertInArry />
      <hr />
      <BucketList />
    </>
  );
}
