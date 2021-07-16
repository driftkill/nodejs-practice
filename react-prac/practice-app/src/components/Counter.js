import React, { useEffect, useState } from "react";

function Counter() {
  const getInitialState = () => {
    try {
      var countValue = localStorage.getItem("countVal");
      return parseInt(countValue);
    } catch (error) {
      return 0;
    }
  };

  const [count, setCount] = useState(getInitialState);

  const incrementHandler = () => {
    if (count === 0) {
      const p = document.getElementById("msg");
      p.style.display = "none";
    }
    setCount(count + 1);
  };

  const decrementHandler = () => {
    if (count === 0) {
      const p = document.getElementById("msg");
      p.style.display = "block";
      return;
    }
    setCount(count - 1);
  };

  useEffect(() => {
    localStorage.setItem("countVal", count);
  }, [count]);

  return (
    <div className="Counter">
      <button onClick={incrementHandler}>
        <big>+</big>
      </button>{" "}
      {count}{" "}
      <button onClick={decrementHandler}>
        <big>-</big>
      </button>
      <span id="msg" style={{ display: "none" }}>
        Cannot go negative !!
      </span>
    </div>
  );
}

export default Counter;
