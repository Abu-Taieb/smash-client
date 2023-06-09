import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase.config";



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword( email, password)
    }

    // Sign Out 
    const logOut = () => {
        setLoading(true);
        return signIn(auth)
    }

    // Catch Current User 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currentUser',currentUser);
            setLoading(false);
        })
        return() => {
            return unsubscribe();
        }
    }, [])

    // Send Info to All Location 
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;