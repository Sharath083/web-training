import React from "react";
import ListDisplayHelper from "./ListDisplayHelper";
// function ListRender() {
//   const list = ["l1", "l2", "l3", "l4"];
//   const listData = list.map((data) => <h2>{data}</h2>);
//   return <div>{listData}</div>;
// }

function ListRender() {
  const persons = [
    { name: "Naruto", skill: "Hokage" },
    { name: "Luffy", skill: "Sun God" },
    { name: "Ichigo", skill: "Vasta Lord" },
  ];
  const big3 = persons.map((mc) => (
    <ListDisplayHelper key={mc.name} data={mc} />
    //key should always be unique for items in list,so it becomes easy for react to reflect changes in list into webpage
  ));
  return <div>{big3}</div>;
}
export default ListRender;
