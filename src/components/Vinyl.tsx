import React, { useState } from "react";
import "./Vinyl.css";
// import Cover from "../assets/cover.jpg";
// import Arm from "./Arm";

function Vinyl() {
  const [move, setMove] = useState(false);

  return (
    <div className="area">
      <div
        className={`vinyl ${move ? "rotating" : "stopped"}`}
        onClick={() => setMove(!move)}
      >
        <div className="small-circle">
          <div className="small-circle">
            <div className="small-circle">
              <div className="small-circle">
                <div className="small-circle">
                  <div className="small-circle">
                    <div className="small-circle">
                      <div className="small-circle">
                        <div className="small-circle">
                          <div className="small-circle">
                            <div className="small-circle">
                              <div className="small-circle">
                                <div className="small-circle">
                                  <div className="small-circle">
                                    <div className="small-circle">
                                      <div className="small-circle">
                                        <div className="small-circle">
                                          <div className="small-circle">
                                            <div className="small-circle">
                                              <div className="small-circle">
                                                <div className="small-circle">
                                                  <div className="small-circle">
                                                    <div className="small-image">
                                                      <div className="song-name">
                                                        Espresso
                                                      </div>
                                                      <div className="artist-name">
                                                        Sabrina Carpenter
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={move ? "arm  moving-arm" : "arm"}
        onClick={() => setMove(!move)}
      >
        <div className="pin"></div>
      </div>
    </div>
  );
}
export default Vinyl;
