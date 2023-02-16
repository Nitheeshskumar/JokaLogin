import React from "react";
import BackgroundImage from './components/background.jpg';
import logo from './components/logo.png';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Dashboard() {
  let api_response=[];
  let history = useHistory();

  function handleBack() {
    history.push("/Dashboard");
  }

  function handleJD() {
    window.location.replace('https://www.youtube.com/');
  }

  function handleLogout() {
    const auth_token = localStorage.getItem('joka_auth_token');
    const headers = {
      'joka_auth_token': auth_token,
    }
    axios.post('http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/logout',{}, {
      headers: headers
    })
    .then(response => {
      localStorage.setItem('auth_data', '');
      localStorage.setItem('joka_auth_token','');
      api_response = 'Logout Sucessful'
      setTimeout( function() { handleBack(); }, 1000);
    })
    .catch((error) => {
      console.error('Error:', error);
      api_response = 'Logout Failed'
    });
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
            IIM Calcutta
          </div>
              <div style={ BoxStyle }
                className="is-underlined has-text-link"
                onClick={handleBack}
              >
                {" "}
                Back
              </div>
              <div style={ BoxStyle }
                className="is-underlined has-text-link"
                onClick={handleJD}
              >
                {" "}
                Joka Directory
              </div>
              <div style={ BoxStyle }
                className="is-underlined has-text-link"
                onClick={handleLogout}
              >
                {" "}
                Logout
              </div>
              <div>
              {api_response && (
                  <p> {api_response}</p>
                )}
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
