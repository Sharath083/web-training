import "./App.css";
import Greet from "./component/Greet";
import { Hello } from "./component/JSXExmple";
import ClassComponent from "./component/ClassComponent";
import StateEx from "./component/StateEx";
import SetState from "./component/SetState";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";

import EventHandlerBind from "./component/EventHandlerBind";
import ParentComponent from "./component/ParentComponent";
import ConditionalRender from "./component/ConditionalRender";
import ListRender from "./component/ListRender";
import StyleSheet from "./component/stylee/StyleSheet.js";
import Inline from "./component/stylee/Inline.js";
import "./component/stylee/MyCss.css";
import styles from "./component/stylee/MyCss.module.css";
import Forms from "./component/Forms";
function App() {
  return (
    <div className="App">
      <Forms></Forms>

      {/* <h1 className="error">ERROR</h1> */}
      {/* <h1 className={styles.success}>SUCCESS</h1> */}
      {/* for style success class we need specify the class thar we going to import  */}

      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <Inline></Inline> */}

      {/* <ListRender></ListRender> */}
      {/* <ConditionalRender></ConditionalRender> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventHandlerBind /> */}

      {/* <ClassClick></ClassClick>
      <FunctionClick></FunctionClick>
      <SetState></SetState>

      <StateEx name="aaa"></StateEx>

      <Greet name="Luffy" type="HTML">
        <p>King of Pirates</p>
      </Greet>

      <Hello name="Naruto" type="JSX">
        <p>7th Hokage</p>
      </Hello>

      <ClassComponent name="Ichigo" type="Html ClassComponent">
        <p>Sub Soul Repar</p>
      </ClassComponent> */}
    </div>
  );
}

export default App;
