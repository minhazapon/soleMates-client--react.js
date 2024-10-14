import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const fireContext = createContext(null)

       const gleZ = new GoogleAuthProvider(null)

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)

    const [ loading, setLoading ] = useState(true)

    const createUser = (email, password) =>{
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)


    }

    const signIn = (email, password) =>{
      
        setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)

    }

    const googleOn = () =>{
       
        setLoading(true)
      return signInWithPopup(auth, gleZ )

    }

    const logOut = () =>{
       
        setLoading(true)
      return signOut(auth)  


    }


    useEffect( () =>{
       const unSubscribe = onAuthStateChanged( auth, currentAuth => {          
          console.log(currentAuth)
          setUser(currentAuth)
          setLoading(false)
       } )
       return () =>{
        unSubscribe();
       }
    } , [])
    

    const authInfo = { user, createUser, signIn, googleOn, logOut, loading }
    
    return (
        <div>

            <fireContext.Provider value={authInfo} >
                 
                 {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;