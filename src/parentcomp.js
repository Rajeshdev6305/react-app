import React from "react";
import AdminComp from "./Parentcomponent/admincomp";
import UserComp from "./Parentcomponent/usercomp";


function Parent(props){
    return props.login==="user"?<UserComp/>:<AdminComp/>
}


export default Parent;