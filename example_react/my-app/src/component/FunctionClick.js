import React from "react";
function FunctionClick() {
  function clickFun() {
    alert("Button Clicked!");
  }
  return (
    <div>
      <button onClick={clickFun}>Click</button>
    </div>
  );
}
export default FunctionClick;
