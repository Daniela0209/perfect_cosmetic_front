import React from "react";
import "./styles/index.css";
import Logo from "../../images/logo.png";
import Fondo from "../../images/fondo.jpg";



function Login({signInWithGoogle}){
    return(
        <div className="container-fluid fondo"
        style={{ backgroundImage: `url(${Fondo})` }} >

          <div id="circulo">
              <img className="logoinicio"   
              class="rounded mx-auto d-block logoinicio"
               src={Logo} alt="x"/>
          </div>

            <div className="sub-container" >
            <div id = "container-login" className="container-login">
        <div id = "container-login-buttonGoogle" className="container-login-buttonGoogle">
          <button 
            id = "buttonSinginwithGoogle"
            data-testid="buttonSinginwithGoogle"
            onClick={signInWithGoogle}
          >
            <img
              id = "logoGoogle"
              src="https://img.icons8.com/fluent/50/000000/google-logo.png"
              alt="icon-google"
            />
            <h3 className="TextLogin">Sign up with Google</h3>
          </button>
        </div>
        </div>
            </div>
            
            </div> 
       
    );
}

export default Login