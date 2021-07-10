import React from "react";
import { auth } from "../../functions/firebaseAuth";
import Cerrar from "../../images/cerrar.png";

function SignOut(){
   return auth.currentUser &&(
      <button onClick={() =>{
         auth.signOut();
      }}> 
      <img className="cerrar" class="rounded mx-auto d-block cerrar" src={Cerrar} alt="x" />
      </button>
   )
};

export default SignOut