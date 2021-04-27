import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [number, setNumber] = useState(1);

  const doubleNumber = useMemo(() => {
    // useMemo hook
    return slowFunction(number);
  }, [number]);

  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
    fontSize: "24px",
  };
  return (
    <div className="bg-secondary text-white p-5">
      <h1>useMemo hook demo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const newNumber = e.target.value;
          setNumber(newNumber);
          console.log("Number: ", number);
        }}
      />
      <button
        className="btn btn-success m-5"
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        Change Theme
      </button>

      <div style={themeStyle}>Double Number : {doubleNumber}</div>
    </div>
  );
}
const slowFunction = (num) => {
  for (let index = 0; index < 1000000000; index++) {}
  return num * 2;
};

export default UseMemoDemo;
