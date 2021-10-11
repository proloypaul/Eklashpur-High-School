import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";


initialization()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            }).catch(error => {
                setError(error.message);
            });
    };

    const signOutProcess = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            });
    };

    // signin and signOut state process
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    }, [])


    return{
        user,
        error,
        signInUsingGoogle,
        signOutProcess 
    }
};

export default useFirebase