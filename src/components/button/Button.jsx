import React from "react";
import "./Button.css";

function Button({ children,func, bg }) {
  return (
    <button onClick={func} className="btn" style={{ backgroundColor: bg }}>
      {children}
    </button>
  );
}

export default Button;
