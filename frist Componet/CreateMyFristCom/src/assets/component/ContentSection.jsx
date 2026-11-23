function RecatFeatures() {
  return (
    <div>
      <h1 className="text-green-800 mt-5 mb-5">Key Features of React</h1>
      <ul className="text-[14px]">
        <li>
          <span className="font-bold text-black">Component-Based:</span>
          React apps are built using independent, reusable components, making
          development modular, easier to maintain, and scalable.
        </li>
        <li>
          <span className="font-bold text-black">Virtual DOM:</span>
          React creates a lightweight copy of the DOM and updates only the
          changed elements, ensuring faster rendering and better performance.
        </li>
        <li>
          <span className="font-bold text-black">Declarative:</span>
          You describe the desired UI state, and React automatically handles
          updates, making the code more predictable and easier to debug.
        </li>
        <li>
          <span className="font-bold text-black">JSX (JavaScript XML):d:</span>
          JSX blends HTML-like syntax with JavaScript, making UI code more
          intuitive, readable, and closer to the final output.
        </li>
        <li>
          <span className="font-bold text-black">
            Unidirectional Data Flow:
          </span>
          Data flows in a single direction, from parent to child components via
          props, ensuring clear data handling and simpler debugging.
        </li>
      </ul>
    </div>
  );
}

function Reactbasics() {
  return (
    <div>
      <h1 className="text-[#2196F3] scroll-mt-6 mb-5">Step 1:React Basics</h1>
      <h2 className="text-green-800 text-blod scroll-mt-6 mb-5">
        What is React?
      </h2>
      <ul>
        <li>
          <span className="text-blue-600">React</span> is an open-source
          JavaScript library used for building dynamic and interactive user
          interfaces, especially for single-page applications (SPAs).
        </li>
        <li>It is developed and maintained by Facebook (Meta).</li>
        <li>
          React makes it easier to create fast, scalable, and simple
          applications using a component-based architecture.
        </li>
        <li>
          It focuses on rendering UI efficiently by updating only the necessary
          parts of the DOM through its Virtual DOM mechanism
        </li>
      </ul>
    </div>
  );
}

export default function ContentSection() {
  return (
    <>
      <Reactbasics />
      <RecatFeatures />
    </>
  );
}
