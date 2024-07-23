import { Component } from "react";

class StateEx extends Component{
    
    constructor(){
        super();
        this.state = {
            message:this.props.msg
        }
    }
    changeMessage(){
        this.setState({message: 'State Message'})
    }

    render(){
        return(
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={()=>this.changeMessage()}>Change Text</button>
            </div>
        )
    }
}

export default StateEx;