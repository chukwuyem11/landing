import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";
import Stuff from "./shape1";
import Shape from "./shape2";
import Shape3 from "./shape3";
import Shape4 from "./shape4";
import Shape5 from "./shape5";

import { HiOutlineChartBar, HiOutlineCash, HiGlobeAlt } from "react-icons/hi";
const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
// #8C54FB
// #5C14EC
const Body = () => {
  return (
    <div>
      <div
        css={mq({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: ["column", "row", "row"],
        })}
      >
          <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20
                })}
              >
        <div
          css={mq({
            width: ["80vw",300,300],
            height: 200,
            borderRadius: 5,
            backgroundColor: "#ffffff",
            boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <div>
            <div
              css={mq({
                width: 200,
                position: "relative",
                left: [-180,-150,-150],
                top: 100,
                zIndex: 1,
              })}
            >
              <Shape />{" "}
            </div>
            <div
              css={mq({
                position: "relative",
                left: 0,
                top: -101,

                right: 0,
                zIndex: 2,
              })}
            >
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                })}
              >
                <div
                  css={mq({
                    fontFamily: "PT Sans",
                    fontWeight: 800,
                  })}
                >
                  28M+
                </div>
              </div>
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                })}
              >
                <div
                  css={mq({
                    fontFamily: "PT Sans",
                    fontWeight: 800,
                    marginTop: 5,
                    color: "#c4c4c4",
                  })}
                >
                  Wallets
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20
                })}
              >
        <div
          css={mq({
            width: 300,
            width: ["80vw",300,300],
            height: 200,
            borderRadius: 5,
            backgroundColor: "#ffffff",
            boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
            overflow: "hidden",
            display: "flex",
            
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <div>
            <div
              css={mq({
                width: 200,
                position: "relative",
                left: [-200,-150,-150],
                top: 100,
                zIndex: 1,
              })}
            >
              <Shape />{" "}
            </div>
            <div
              css={mq({
                position: "relative",
                left: 0,
                top: 0,

                right: 0,
                zIndex: 2,
              })}
            >
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                })}
              >
                <div
                  css={mq({
                    fontFamily: "PT Sans",
                    fontWeight: 800,
                  })}
                >
                  $20000B
                </div>
              </div>
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                })}
              >
                <div
                  css={mq({
                    fontFamily: "PT Sans",
                    fontWeight: 800,
                    marginTop: 5,
                    color: "#c4c4c4",
                  })}
                >
                  Transported
                </div>
              </div>
            </div>
            <div
              css={mq({
                width: 200,
                position: "relative",
                right: [-160,-120,-120],
                top: -30,
                zIndex: 1,
              })}
            >
              <Shape />{" "}
            </div>
          </div>
        </div>
        </div>
        <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20
                })}
              >
        <div
          css={mq({
            width: ["80vw",300,300],
            height: 200,
            borderRadius: 5,
            backgroundColor: "#ffffff",
            boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <div>
            <div
              css={mq({
                position: "relative",
                left: 0,
                top: 101,

                right: 0,
                zIndex: 2,
              })}
            >
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                })}
              >
                <div
                  css={mq({
                    fontFamily: "PT Sans",
                    fontWeight: 800,
                    
                  })}
                >
                  150
                </div>
              </div>
              <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                })}
              >
                <div
                  css={mq({
                    fontFamily: "PT Sans",
                    fontWeight: 800,
                    marginTop: 5,
                    color: "#c4c4c4",
                  })}
                >
                  Countries
                </div>
              </div>
            </div>
            <div
              css={mq({
                width: 200,
                position: "relative",
                right: [-160,-120,-120],
                top: -60,
                zIndex: 1,
              })}
            >
              <Shape />{" "}
            </div>
          </div>
        </div></div>
      </div>
      <div
        css={mq({
          marginTop: 100,
        })}
      >
        <div
          css={mq({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: ["column", "row", "row"],
            marginLeft: [24, 0, 0]
          })}
        >
          <div
            css={mq({
              flex: "50%",
            })}
          >
            <div
              css={mq({
                fontFamily: "PT Sans",
                fontSize: [35, 50, 50],
                fontWeight: 600,
                color: "#24085e",
              })}
            >
              Your passport to the future of finance
            </div>
            <div
              css={mq({
                fontFamily: "Hubballi",
                fontSize: [20,25,25],
                marginTop: 30,
                color: "#24085e",
              })}
            >
              The first and most trusted crypto curency company
            </div>
          </div>
          <div
            css={mq({
              flex: "50%",
              display: ["none","block","block"]
            })}
          >
            <div>
              <img
                css={mq({
                  width: [400,500,500],
                })}
                src="crypto.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          css={mq({
            display: "flex",
            justifyContent: "space-between",
            flexDirection: ["column", "row", "row"],
            marginTop: [100, 100, 100]
          })}
        >
             <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20
                })}
              >
          <div
            css={mq({
                width: ["80vw",300,300],
              padding: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
              overflow: "hidden",
            })}
          >
            <div>
              <div
                css={mq({
                  width: 200,
                  position: "relative",
                  right: [-230,-150,-150],
                  bottom: 100,
                  zIndex: 1,
                  marginBottom: -200,
                })}
              >
                <Shape5 />{" "}
              </div>
              <div
                css={mq({
                  fontSize: 50,
                })}
              >
                <HiOutlineChartBar color="#24085e" />
              </div>

              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  fontSize: 30,
                  color: "#5C14EC",
                })}
              >
                Invest
              </div>
              <div
                css={mq({
                  fontFamily: "Hubballi",
                  fontSize: [22, 25, 25],
                  marginTop: 10,
                })}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur.
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#24085e",
                  marginTop: 10,
                })}
              >
                Learn more
              </div>
            </div>
          </div></div>
          <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20
                })}
              >
          <div
            css={mq({
                width: ["80vw",300,300],
              padding: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
              overflow: "hidden",
            })}
          >
            <div>
              <div
                css={mq({
                  width: 200,
                  position: "relative",
                  right: [-230,-150,-150],
                  bottom: 100,
                  zIndex: 1,
                  marginBottom: -200,
                })}
              >
                <Shape5 />{" "}
              </div>
              <div
                css={mq({
                  fontSize: 50,
                })}
              >
                <HiOutlineCash color="#24085e" />
              </div>

              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  fontSize: 30,
                  color: "#5C14EC",
                })}
              >
                Invest
              </div>
              <div
                css={mq({
                  fontFamily: "Hubballi",
                  fontSize: [22, 25, 25],
                  marginTop: 10,
                })}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur.
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#24085e",
                  marginTop: 10,
                })}
              >
                Learn more
              </div>
            </div>
          </div></div>
          <div
                css={mq({
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20
                })}
              >
          <div
            css={mq({
                width: ["80vw",300,300],
              padding: 20,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 21px -6px rgba(0,0,0,0.2)",
              overflow: "hidden",
            })}
          >
            <div>
              <div
                css={mq({
                  width: 200,
                  position: "relative",
                  right: [-230,-150,-150],
                  bottom: 100,
                  zIndex: 1,
                  marginBottom: -200,
                })}
              >
                <Shape5 />{" "}
              </div>
              <div
                css={mq({
                  fontSize: 50,
                })}
              >
                <HiGlobeAlt color="#24085e" />
              </div>

              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  fontSize: 30,
                  color: "#5C14EC",
                })}
              >
                Invest
              </div>
              <div
                css={mq({
                  fontFamily: "Hubballi",
                  fontSize: [22, 25, 25],
                  marginTop: 10,
                })}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur.
              </div>
              <div
                css={mq({
                  fontFamily: "PT Sans",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#24085e",
                  marginTop: 10,
                })}
              >
                Learn more
              </div>
            </div>
          </div></div>
        </div>
      </div>
      <div
        css={mq({
          display: "flex",
          justifyContent: "center",
          marginTop: 100,
        })}
      >
        <div>
            
          <div
            css={mq({
              fontFamily: "PT Sans",
              fontSize: [35, 50, 50],
              fontWeight: 600,
              color: "#24085e",
              textAlign: "center"
            })}
          >
              
            Your passport to the future of finance
          </div>
          <div
            css={mq({
              display: "flex",
              justifyContent: "center",
            })}
          >
            <div
              css={mq({
                fontFamily: "Hubballi",
                fontSize: [20,25,25],
                marginTop: 30,
                color: "#24085e",
                textAlign: "center"
              })}
            >
              Maxime mollitia, molestiae quas vel sint commodi repudiandae.
            </div>
          </div>
          <div
            css={mq({
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
            })}
          >
            <button
              css={mq({
                backgroundColor: "#5C14EC",

                borderRadius: 35,
                marginRight: 10,
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
                Create wallet
              </div>
            </button>
            <button
              css={mq({
                backgroundColor: "#5C14EC",
                marginLeft: 10,
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
                Learn more
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
