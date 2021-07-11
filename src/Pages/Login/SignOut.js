
import firebase from "../../functions/firebaseInit";
import "firebase/auth"


export const auth = firebase.auth();
export const SignInWithGoogle = () =>{
   auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

export const SignOut = () =>{
   auth.signOut();
   window.location.href=  '/';
}



export default SignOut