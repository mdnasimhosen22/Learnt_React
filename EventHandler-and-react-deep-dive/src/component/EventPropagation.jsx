// ei khane button er onClick click korlei tar parent er event gulo fire hochche ei tai holo evant propagation , child theke tar parent er dike jai. je khane event suru hoiche oi khante tar upore sob parent er sob event handler fire hobe .

export default function EventPropagation() {
  return (
    <div onClick={() => alert("Hi Iam top parent div")}>
      <div onClick={() => alert("Hi iam Second parent div")}>
        <button onClick={() => alert("Clicked strating")}>click me</button>
      </div>
    </div>
  );
}
