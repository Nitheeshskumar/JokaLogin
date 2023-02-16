import React from "react";
import BackgroundImage from './components/background.jpg';
import logo from './components/logo.png';

function Dashboard() {

  function handleForgot() {
    console.log("forgot");
    window.location.replace('http://localhost:3000/');
    // history.push("/forgotpassword");
  }

  return (
    <header style={ HeaderStyle }>
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
          <img src={logo} style={{  width: "30%", marginLeft:"auto",marginRight:"auto", display:"block"}}></img>
          <div style={ BoxStyle }>
            <h1 style={{marginBottom: "0px"}}>Joka Utils</h1>
            IIM Calcutta's Central Authentication service
          </div>
              <div style={ BoxStyle }
                className="is-underlined has-text-link"
                onClick={handleForgot}
              >
                {" "}
                Joka Directory
              </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
const BoxStyle = {
  textAlign: "center",
  marginBottom: "20px"
}

export default Dashboard;
