import React, { useEffect, useState } from "react";

function UseEffectHooksDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sourav");
  const [withCount, setWithCount] = useState(window.screen.width);

  useEffect(() => {
    console.log("first useEffect");
    if (count !== 0) document.title = `Count (${count})`;
    else document.title = `Count`;
  }, [count]);

  useEffect(() => {
    console.log("Second useEffect");
  }, [name]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWithCount(window.innerWidth);
    });
  });

  return (
    <div className="container text-center mt-5">
      <h1 className="display-5 text-info mb-5 text-uppercase">
        use effect hook demo. (Current Screen Size : {withCount})
      </h1>
      <h2 className="display-6">{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-dark"
      >
        +
      </button>

      <div className="container mt-5">
        <h1 className="display-5 text-info mb-5 text-uppercase">
          another useEffect
        </h1>
        <h2 className="display-6">{name}</h2>
        <button
          onClick={() => {
            setName("Sourav Ganguly");
          }}
          className="btn btn-dark"
        >
          Change Name
        </button>
      </div>
    </div>
  );
}

export default UseEffectHooksDemo;
