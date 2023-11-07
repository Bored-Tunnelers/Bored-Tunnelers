import React from "react";
import pic from "./Pciture1E3.png";
import "./ElementThree.css"; // Import the CSS file

const ElementThree = () => {
  return (
    <>
      {/* <div className="container my-5 gradient-border big" style={{ padding: '0px', paddingLeft: '20px' }}>
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="center-text" style={{ fontSize: '50px', paddingBottom: '30px' }}>The Bangladeshi Team</h2>
            <p className="center-text" style={{ fontSize: '30px' }}>
              Team Bored Tunnellers proposes a solution, Micro Tunnelling Boring Machine (MTBM), that aims to resolve issues like traffic congestion and water-logging.
              TBM technology has the potential to revolutionize the tunneling industry by enabling the construction of more efficient and less disruptive tunnels.
            </p>
          </div>
          <div className="col-md-6 disappear">
            <img className='img-fluid ' style={{ maxWidth: '100%', maxHeight: '500px', paddingLeft: '285px' }} src={pic} alt="Bored Tunnellers" />
          </div>
        </div>
      </div>


      <div className="container my-5 gradient-border center-text small" style={{ padding: '0px', textAlign: 'center' }}>
        <div className="column">
          <div className="col">
            <h2 className="center-text" style={{ fontSize: '50px', paddingBottom: '30px' }}>The Bangladeshi Team</h2>
            <p className="center-text" style={{ fontSize: '30px' }}>
              Team Bored Tunnellers proposes a solution, Micro Tunnelling Boring Machine (MTBM), that aims to resolve issues like traffic congestion and water-logging.
              TBM technology has the potential to revolutionize the tunneling industry by enabling the construction of more efficient and less disruptive tunnels.
            </p>
          </div>
        </div>
      </div> */}
      <div
        className="container-fluid"
        style={{ paddingLeft: "10rem", paddingRight: "10rem" }}
      >
        <img
          src="images/TeamBangladesh.png"
          alt="team bangladesh"
          style={{ width: "100%" }}
        />
        <p
          className="text-center py-5"
          style={{
            fontSize: "1.7rem",
            paddingLeft: "10rem",
            paddingRight: "10rem",
          }}
        >
          Team BORED TUNNELLERS is the only South Asian Team to be qualified for
          the Finals in Elon Musk's Not-A-Boring Competition. Their proposed
          solution Micro Tunnelling Boring Technology has the potential to win
          the Not-a-Boring Competition 2024.
        </p>
      </div>
    </>
  );
};

export default ElementThree;
