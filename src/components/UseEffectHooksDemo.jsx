import React, { useEffect, useState } from "react";

function UseEffectHooksDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) document.title = `Count (${count})`;
    else document.title = `Count`;
  }, [count]);

  console.log("after useEffect block");

  return (
    <div className="container text-center mt-5">
      <h1 className="display-5 text-info mb-5">use effect hook demo</h1>
      <h2 className="display-6">{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-dark"
      >
        +
      </button>
    </div>
  );
}

export default UseEffectHooksDemo;
