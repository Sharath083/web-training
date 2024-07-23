import React from "react";
function ChildCompo(props) {
  return (
    <div>
      <button onClick={props.greet}>Greet</button>
    </div>
  );
}

export default ChildCompo;
