import logo from './logo.svg';
import './App.css';
import Greet ,{GoogleGem} from './component/Greet.js';
import ClassComponent from './component/ClassComponent.js'
import {Hello} from './component/JSXExmple.js'
import StateEx from './component/StateEx.js';


function App() {
  return (
    <div className="App">


      {/* <GoogleGem ip='scahin'></GoogleGem> */}

    {/* <StateEx msg='Props Message'></StateEx> */}

      <Greet name='Luffy' type='HTML'> 
        <p>King of Pirates</p>
      </Greet>

      <Hello name='Naruto' type='JSX'>
        <p>7th Hokage</p>
      </Hello>
    

      <ClassComponent name='Ichigo' type='Html ClassComponent'>
        <p>Sub Soul Repar</p>
      </ClassComponent>

      
    </div>
  );
}

export default App;
