import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import { HiMenuAlt4 } from 'react-icons/hi';

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
// #8C54FB
// #5C14EC
const Nav = () => {
    return(
        <div css={mq({
            display: "flex",
            justifyContent: "center"
        })}>
            <div css={mq({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
           paddingTop: 10,
           paddingBottom: 10,
            marginLeft: 10,
            marginRight: 10
        })}>
            <div css={mq({
                flex: "20%",
                
            })}>
                <img src="logo.png" css={mq({
                    width: [60,80,80],
                    marginLeft: [10, 0, 0],
                    height: "auto"
                })}/>
            </div>
            <div css={mq({
              display: ["block", "none", "none"],
              fontSize: 30
            })}>
            <HiMenuAlt4 color="#24085e" />
            </div>
            
<div css={mq({
    flex: "50%",
    display: ["none", "block", "block"],
    
})}>
<div css={mq({
              
              display: "flex",
            })}>
      <div
        css={mq({
          color: "#000",
          fontFamily: "Hubballi",
          fontSize: [20, 30, 25],
          
          ":hover": { color: ["#c4c4c4", "#f5f5f5", "#000"], borderRadius: 10, },
          borderRadius: 5,
          padding: 5
        })}
      >
        Products
      </div>

      <div
        css={mq({
            color: "#000",
         fontFamily: "Hubballi",
          fontSize: [20, 30, 25],
          ":hover": { color: ["#c4c4c4", "#f5f5f5", "#000"], borderRadius: 10, },
          borderRadius: 5,
          padding: 5,
          marginLeft: 10
        })}
      >
        About
      </div>
      </div>
      </div>
      <div css={mq({
              display: ["none", "block", "block"]
            })}>
      <div css={mq({
          display:"flex",
          justifyContent: "space-between"
      })}>
          <div>
          <button css={mq({
              
              backgroundColor: "#5C14EC",
              
              borderRadius: 50,
              
              border: "none",
              borderWidth: 2
              
          })}><div css={mq({
            paddingBottom: 5,
            paddingTop: 5,
            paddingLeft: 15,
            paddingRight: 15,
            fontSize: 25,
            fontFamily: "Hubballi",
            color: "#fff",
          })}>Login</div></button>
          </div>
           <div >
          <button css={mq({
              
              backgroundColor: "#5C14EC",
              marginLeft: 15,
              borderRadius: 50,
              
              border: "none",
              borderWidth: 2
              
          })}><div css={mq({
            paddingBottom: 5,
            paddingTop: 5,
            paddingLeft: 15,
            paddingRight: 15,
            fontSize: 25,
            fontFamily: "Hubballi",
            color: "#fff",
          })}>Sign Up</div></button></div>
      </div></div>
      </div>
        </div>
    )
}

export default Nav