import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Footer from "../components/footer"
import Home from "../components/home"


const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
// #8C54FB
// #5C14EC
//#24085e
const Homes = () => {
    return(  
            <div>
            <Home />
            <Footer />
            
        </div>
    )
}

export default Homes