import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Stuff from "./shape1"
import Shape from "./shape2"
import Shape3 from "./shape3"
import Shape4 from "./shape4"
import Shape5 from "./shape5"

import { HiOutlineChartBar, HiOutlineCash, HiGlobeAlt } from 'react-icons/hi';
const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
// #8C54FB
// #5C14EC
const Footer = () => {
    return(
        <div>
        <div css={mq({
    display: "flex",
    justifyContent: "center",
    border: "solid",
        borderTopWidth:1,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
        marginTop: 100,
        borderColor:"#24085e"

})}>
    <div css={mq({
        marginTop: 20,
        marginBottom: 20,
        color: "#24085e"
    })}>
    © 2021 CRYPTO. ALL RIGHTS RESERVED
    </div>
</div>
        </div>
    )
}

export default Footer