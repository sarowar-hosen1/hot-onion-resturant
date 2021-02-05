import firebase from 'firebase/app';
import "firebase/auth";
import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebaseConfig from '../../firebaseConfig';

firebase.initializeApp(firebaseConfig);


const AuthContext = createContext();
export const AuthProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
const Auth = () => {
    const [user, setUser] = useState(null);
    
    //signIn with email & password
    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user)
                window.history.back();
            })
            .catch(error => {
                setUser(error.message)
            })
    }

    //Signout with email & password
    const signUp = (email, password, name) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            firebase.auth().currentUser.updateProfile({
                displayName: name
            }).then(() => {
              setUser(res.user);
              window.history.back(); 
            });
        })
        .catch(err=> setUser({error: err.message}))
    }

    //Signin wtih google provider
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setUser(res.user)
                window.history.back();
            })
            .catch(error => {
                setUser(error.message)
            }
            )
    }

    //sginin with fb provider
    const fbsignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setUser(res.user)
                window.history.back()
            })
            .then(error => {
                setUser(error.message)
            })
    }

    //sginout method
    const signOut = () => {
        firebase.auth().signOut().then(function() {
            setUser(null)
          }).catch(function(error) {
            // An error happened.
          });
    }

    return {
        user,
        signIn,
        signUp,
        signOut,
        googleSignIn,
        fbsignIn
    }
}