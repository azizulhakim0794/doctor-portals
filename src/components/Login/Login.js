import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './FirebaseConfig/FirebaseConfig'
import { UserContext } from '../../App';
import './Login.css'
import logo from './../../images/doctor-logo.png'
import google from './../../images/google.png'
const Login = () => {
    const [userDataInfo, setUserDataInfo] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
    }
    const singInWithGoogle = (e) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const user = result.user;
          const { displayName, email, uid, photoURL } = user
          const newUserData = { ...userDataInfo }
          newUserData.isSignedIn = true
          newUserData.name = displayName
          newUserData.email = email
          newUserData.uid = uid
          newUserData.photoURL = photoURL
          setUserDataInfo(newUserData)
          history.push(from);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          if (errorCode || errorMessage || email || credential) {
            console.log(errorMessage, errorCode, email, credential);
          }
        });
      e.preventDefault()
  
    }
    return (
            <div className="container">
            <p className="text-center mt-5">
                <img className="login-img img-fluid" src={logo} alt="" />
            </p>
            <div className="d-flex justify-content-center mt-5">
                <div className="card col-md-4 col-sm-12 col-xs-12">
                    <div className="round-pill p-5 ">
                        <h2 className="text-center">Login with</h2><br />
                        <p className="text-center row d-flex" onClick={singInWithGoogle}>
                            <span className="border google-formate p-1"> <img className="col-md-4 google-icon" src={google} alt="" /> <span className="col-md-8 mr-3"> Continue with google</span></span>
                        </p>
                        <p className="text-center">
                            Don't have an account <span className="text-primary create-account" onClick={singInWithGoogle}><u>Create a new account</u></span>
                        </p>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    );
};

export default Login;