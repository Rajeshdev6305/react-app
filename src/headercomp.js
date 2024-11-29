import { Component } from "react";

class HEADER extends Component{
render(){
    return(
        <div>
        <ul style={{display: "flex",justifyContent: "center", gap: "40px", color: "blue", fontSize: "20px",}}>
            <li>home</li>
            <li>contact</li>
            <li>price</li>
            <li>login</li>
            <li>sign up</li>
            <li>about us</li>
        </ul>
        </div>
    )
}

}

export default HEADER;