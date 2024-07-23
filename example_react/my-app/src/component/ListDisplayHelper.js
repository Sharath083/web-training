import React from "react";

function ListDisplayHelper(props) {
  return (
    <div>
      <h2>
        My Name is {props.data.name}. I am {props.data.skill}.
      </h2>
    </div>
  );
}

export default ListDisplayHelper;
