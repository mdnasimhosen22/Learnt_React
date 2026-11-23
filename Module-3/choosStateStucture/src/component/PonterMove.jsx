import { useState } from "react";
export default function PonterMove() {
  // amader ei khane mous move korar jonno x position and y position duitay move kroa te hobe to amde nicher moto duita state niye o kaj korte abr jehetu amder dui position er man e call korte hochhe to amr ei vabe duita na kore akta grup sate hoseb use korete pari akta state jekhane x,y dui man e thakbe ete code dekhe o bug howar change kom thake

  // amader jokhon dui ba tar odhik jodi state akta change korte hoi tobe amra state gulo ak shathe gruop kore likha better

  // Another case amara group state use korte pari dori amra jani na amader koto gulo data add hobe ei rokom dynamic state gulo amra array er madhome group state kote pari
  // dori amra akta input fild nibo akta button click korle oio input fild ta add hobe ei khetre amra group state use korbo

  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div
      style={{ position: "relative", width: "100vw", height: "100vh" }}
      onPointerMove={handlePointerMove}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: 20,
          height: 20,
          borderRadius: "50%",
          left: -10,
          top: -10,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}

// form.jsx componet dynamic state er group er exam-le dewa holo
