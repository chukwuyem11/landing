import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Stuff from "./shape1";
import Shape from "./shape2";
import { BiCaretDown } from "react-icons/bi";
const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
// #8C54FB
// #5C14EC
const Hero = () => {
  return (
    <div
      css={mq({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: ["column", "row", "row"],
        marginTop: [100, 0, 0]
      })}
    >
      <div
        css={mq({
          flex: ["100%", "50%", "50%"],
          marginLeft: [24, 0, 0]
        })}
      >
        <div
          css={mq({
            fontFamily: "PT Sans",
            fontSize: [35, 50, 50],
            fontWeight: 800,
            color: "#24085e",
            
          })}
        >
          Connecting
        </div>
        <div
          css={mq({
            fontFamily: "PT Sans",
            fontSize: [35, 50, 50],

            color: "#24085e",
          })}
        >
          the world to crypto
        </div>
        <div
          css={mq({
            fontFamily: "Hubballi",
            fontSize: [23, 25, 25],
            marginTop: [10,30,30],
            color: "#24085e",
          })}
        >
          The easy way to store, send, receive and convert digital currencies
        </div>
        <div
          css={mq({
            marginTop: [20,30,30],
          })}
        >
          <button
            css={mq({
              backgroundColor: "#5C14EC",

              borderRadius: 35,

              border: "none",
              borderWidth: 2,
            })}
          >
            <div
              css={mq({
                paddingBottom: 5,
                paddingTop: 5,
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: [23, 25, 25],
                fontFamily: "Hubballi",
                color: "#fff",
              })}
            >
              Get a Free Wallet
            </div>
          </button>
        </div>
      </div>
      <div
        css={mq({
          flex: ["100%", "50%", "50%"],
          marginLeft: 100,
          display: ["none", "block", "block"]
        })}
      >
        <div
          css={mq({
            position: "relative",
            left: [-50, 0, 0],
            right: 0,
            top: 200,
            bottom: 0,
            zIndex: 2,
            
          })}
        >
          <div
            css={mq({
              width: ["80vw", 400, 400],
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -20px rgba(0,0,0,0.2)",
            })}
          >
            <div
              css={mq({
                fontFamily: "PT Sans",
                fontWeight: 800,
                color: "#c4c4c4",
              })}
            >
              $245.45 ETH
            </div>
            <div
              css={mq({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <div
                css={mq({
                  marginTop: 5,
                })}
              >
                <BiCaretDown color="#c4c4c4" />
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  color: "#c4c4c4",
                })}
              >
                3.76 %
              </div>
            </div>
          </div>
          <div
            css={mq({
              width: ["80vw", 400, 400],
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
            })}
          >
            <div
              css={mq({
                fontFamily: "PT Sans",
                fontWeight: 800,
              })}
            >
              $245.45 ETH
            </div>
            <div
              css={mq({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <div
                css={mq({
                  marginTop: 5,
                })}
              >
                <BiCaretDown />
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                })}
              >
                2.45 %
              </div>
            </div>
          </div>
          <div
            css={mq({
              width: ["80vw", 400, 400],
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -20px rgba(0,0,0,0.2)",
            })}
          >
            <div
              css={mq({
                fontFamily: "PT Sans",
                fontWeight: 800,
                color: "#c4c4c4",
              })}
            >
              $245.45 ETH
            </div>
            <div
              css={mq({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <div
                css={mq({
                  marginTop: 5,
                })}
              >
                <BiCaretDown color="#c4c4c4" />
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  color: "#c4c4c4",
                })}
              >
                0.21 %
              </div>
            </div>
          </div>
        </div>
        <div
          css={mq({
            width: 200,
            position: "relative",
            left: [-130, -100, -100],
            top: [-140, -100, -100],
            zIndex: 1,
          })}
        >
          <Shape />{" "}
        </div>
        <div
          css={mq({
            width: 200,
            position: "relative",
            left: [160, 300, 300],
            top: -150,
            zIndex: 1,
          })}
        >
          <Stuff />{" "}
        </div>
      </div>
      <div>
        <div
          css={mq({
              display: ["block", "none", "none"],
              marginTop: 100,
              marginBottom: 100

          })}
        >
          <div
            css={mq({
              width: ["80vw", 400, 400],
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -20px rgba(0,0,0,0.2)",
            })}
          >
            <div
              css={mq({
                fontFamily: "PT Sans",
                fontWeight: 800,
                color: "#c4c4c4",
              })}
            >
              $245.45 ETH
            </div>
            <div
              css={mq({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <div
                css={mq({
                  marginTop: 5,
                })}
              >
                <BiCaretDown color="#c4c4c4" />
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  color: "#c4c4c4",
                })}
              >
                3.76 %
              </div>
            </div>
          </div>
          <div
            css={mq({
              width: ["80vw", 400, 400],
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
            })}
          >
            <div
              css={mq({
                fontFamily: "PT Sans",
                fontWeight: 800,
              })}
            >
              $245.45 ETH
            </div>
            <div
              css={mq({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <div
                css={mq({
                  marginTop: 5,
                })}
              >
                <BiCaretDown />
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                })}
              >
                2.45 %
              </div>
            </div>
          </div>
          <div
            css={mq({
              width: ["80vw", 400, 400],
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -20px rgba(0,0,0,0.2)",
            })}
          >
            <div
              css={mq({
                fontFamily: "PT Sans",
                fontWeight: 800,
                color: "#c4c4c4",
              })}
            >
              $245.45 ETH
            </div>
            <div
              css={mq({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <div
                css={mq({
                  marginTop: 5,
                })}
              >
                <BiCaretDown color="#c4c4c4" />
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  color: "#c4c4c4",
                })}
              >
                0.21 %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
