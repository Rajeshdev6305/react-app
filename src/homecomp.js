import { Component } from "react";
import FOOTER from "./Portfolio/footercomp";
import HEADER from "./headercomp";
import MAIN from "./Portfolio/maincomp";
import ACcordion from "./Accordioncomponent/accordioncomp";
class HOME extends Component{
    render(){
        return(
            <div>
                {/* <HEADER/>
               
                <FOOTER/> */}
                {/* <ACcordion/> */}
                <MAIN/>
            </div>
        )
    }
}
export default HOME;