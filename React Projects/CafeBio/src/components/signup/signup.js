// Signup.js
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, DatePicker, Button, Select, Modal, List, Space, Divider } from "antd";
import styles from './signup.module.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, get, set } from "firebase/database";
import {app,database,dbset,dbref,dbOnValue, dbupdate}  from '../../objects/dataobject';
import { AppContext } from '../../AppContext';
import NewUserInfoForm from '../NewUserInfoForm/NewUserInfoForm';
import  firebase  from '../../utils/firebaseConfig';
import { useNavigate,useLocation } from 'react-router-dom';
import MerchantInfo from '../../utils/Constants';
import MasterPage from '../MasterPage/MasterPage';
import { Myprofile } from '../myprofile/myprofile';
import { Promolist } from '../promolist/promolist';
import signup from './../../images/signup.png';
const Signup = () => {
  //const { setUserInfo } = useContext(AppContext);
  const { appUserID, setAppUserID } = useContext(AppContext);
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    async function doesUserExist(uid) {
      const userPath = `users/${uid}`;
      const datapath = dbref(database, userPath);
      try {
          const snapshot = await get(datapath);
          if (snapshot.exists()){
            
            return true
          } else{
            return false
          }
      } catch (error) {
          console.error("Error checking user existence:", error);
          return false; // or handle the error in a way that suits your app's flow
      }
  }

    signInWithPopup(auth, provider)
      .then(async (result) => {
        //A New User
        const user = result.user;
        console.log(firebase.auth().currentUser.email)
        console.log(firebase.auth().currentUser)
        setAppUserID(user.uid);
        const userExists = await doesUserExist(user.uid);
        if (!userExists){
          try{
            await createFirebaseUserDetails(user);
            setIsNewUser(true);
          }catch (error) {
            setError(error.message);
          }
        } else {
          setAppUserID(user.uid);
          const prevUrl = sessionStorage.getItem("prev_url");
          if (prevUrl) {
            navigate(prevUrl);
          } else {
            navigate("/newpromo");
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
      });
  };

  const handleNewUserInfoSubmit = (newUserInfo) => {

    newUserInfo["posKey"] = "-";
    newUserInfo["companyName"] = newUserInfo.merchantName ;
    //newUserInfo["merchanthandle"] = newUserInfo["merchanthandle"];
    const userRef = `users/${appUserID}/info`;
   
    const merchantRef = `Merchants/${newUserInfo.merchantHandle}/info`;
    const filteredUserInfo = Object.entries(newUserInfo).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    dbupdate(dbref(database,userRef),{...filteredUserInfo})
    dbset(dbref(database,merchantRef),{...filteredUserInfo})
    navigate('/newpromo')
    // Optionally update context or state as needed
  };
  function createInitials(fname,lname){
    return fname[0] + lname[0]
  }
  async function createFirebaseUserDetails(currentUser) {
    const userDetails = {
      "displayname": currentUser.displayName,
      "phonenumber": currentUser.phoneNumber,
      "email": currentUser.email,
      "uid": currentUser.uid,
      "photourl":currentUser.photoURL,
    };
    dbset(dbref(database,`users/${currentUser.uid}/info`),userDetails);
  }

  return (
    <div className={styles.Signup}>
      {!isNewUser ? (
        <>
<div className={styles.signupBorder}>
          <div className='h1header'>Welcome To Cafe.Bio</div>
          <div className='subtitle'>Please use the button below to signup.</div>

        <div onClick={handleGoogleSignIn}>
          <img  style={{maxHeight:'50px',margin:'10px'}} src={signup}/>
        </div>
     
        </div>
        </>
      ) : (
        <NewUserInfoForm onSubmit={handleNewUserInfoSubmit} />
      )}
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
