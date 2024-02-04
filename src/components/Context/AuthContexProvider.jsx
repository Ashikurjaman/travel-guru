import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);





const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loader, setLoader] = useState(true);

    const createUser =(email,password)=>{
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password)
        
    
    }
    const login =(email, password)=>{
        setLoader(false)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoader(false)
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    
    
    const authInfo = {
        user,
        createUser,
        login,
        logOut,
        loader
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;