import React,{Component} from "react";

class ClassComponent extends Component{
        //props are immutable
    // this.props.name='Goku' gives error
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}  {this.props.type}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default ClassComponent;