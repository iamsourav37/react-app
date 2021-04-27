import React, { useEffect, useState, useRef } from "react";

function UseEffectHooksDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Your name here...");
  const [withCount, setWithCount] = useState(window.innerWidth);

  useEffect(() => {
    console.log("first useEffect");
    if (count !== 0) document.title = `Count (${count})`;
    else document.title = `Count`;
  }, [count]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWithCount(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWithCount(window.innerWidth);
      });
    };
  });

  const nameInput = useRef(null);

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
        <h1 className="display-5 text-info mb-5 ">useRef hook</h1>

        <input
          type="text"
          className="form-controll p-1"
          placeholder="Enter your name..."
          ref={nameInput}
        />
        <button
          onClick={() => {
            const name = nameInput.current.value.trim();
            if (name) {
              setName(name);
              nameInput.current.value = "";
            } else alert("please write your name ");
          }}
          className="btn btn-dark"
        >
          Change Name
        </button>
        <h2 className="display-6 mt-4">{name}</h2>
      </div>
    </div>
  );
}

export default UseEffectHooksDemo;
