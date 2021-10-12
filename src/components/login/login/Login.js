
import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../assets/loginBg.png';
import firebaseConfig from './firebase.config';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


  const submitHandle = (e) => {
    console.log(loggedInUser.email, loggedInUser.password);
    if (newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          storeAuthToken();
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    if (!newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          storeAuthToken();
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    e.preventDefault();

  }

  const blurHandle = (e) => {
    let isValidField
    if (e.target.name === 'email') {
      isValidField = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      isValidField = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value);
    }
    if (e.target.name === 'name') {
      isValidField = e.target.value
    }

    if (isValidField) {
      const newUser = { ...loggedInUser }
      newUser[e.target.name] = e.target.value
      setLoggedInUser(newUser)
    }
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email: email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-field">
            <h3 className="mb-2">Login Form</h3>
            <form onSubmit={submitHandle}>
              {newUser && <input className="form-control" type="text" name="name" onBlur={blurHandle} id="" placeholder="name" required />} <br />
              <input className="form-control" type="text" name="email" onBlur={blurHandle} placeholder="email" required /><br />
              <input className="form-control" type="password" name="password" onBlur={blurHandle} id="" placeholder="password" required />
              {
                newUser ? <small style={{ opacity: '75%' }}>Minimum eight characters, at least 1 letter, 1 number</small> : <small></small>
              }<br />
              <input className="btn-brand mt-4" type="submit" value={newUser ? 'Sing Up' : 'Sing In'} />
              {!newUser ? <p style={{ cursor: 'pointer', color: 'blue' }} className="my-4" onClick={() => setNewUser(!newUser)}>Create an account</p> : <p style={{ cursor: 'pointer', color: 'blue' }} className="my-4" onClick={() => setNewUser(!newUser)}>Already have an account</p>}
            </form>
            <>
              <p>Or connect with another account</p>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <button className="btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
              </div>
            </>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;