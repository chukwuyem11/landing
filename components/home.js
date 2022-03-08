import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Nav from "./nav"
import Hero from "./hero"
import Body from "./body"


const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
// #8C54FB
// #5C14EC
//#24085e
const Home = () => {
    return(  
            <div>
            <div css={mq({
            display: "flex",
           
            justifyContent: "center"
        })}>
            <div css={mq({
            display: "flex",
            
            flexDirection: "column",
           
            width: ["90vw","70vw","70vw"],
           
        })}>
            <Nav />
           <Hero />
           <Body />
                </div>
                </div>
            
        </div>
    )
}

export default Home