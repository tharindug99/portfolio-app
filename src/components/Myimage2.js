import "./Myimage2.css";

import React , {Component} from "react";

class Myimage2 extends Component {
render(){
    return (
        <div className="myimg2">
            <div className="heading">
                <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            </div>
        </div>
      )
}

  
}

export default Myimage2