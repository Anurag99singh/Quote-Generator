import React from "react";

function Button({ runFunctionOnClick }) {
  return (
    <div className="Button">
      <button onClick={runFunctionOnClick}> New Quote</button>
    </div>
  );
}

export default Button;
