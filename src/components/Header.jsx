import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      //sign out
      
    }).catch((error) => {
      //error
      navigate('/error')
    })
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        // const uid = user.uid;

        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL}));

        // ...
        navigate('/browse');
      } else {
        // User is signed out
        // ...
        
        dispatch(removeUser());

        navigate('/');
      }
    });

    return () => unsubscribe();

    // this unsubsribe will be called when component unmounts
   }, [])


  return (
    <div className="bg-gradient-to-r from-black to-red-900 flex justify-between relative z-20">
    <h1 className="text-red-600 text-5xl font-extrabold tracking-tight p-4">
      NEBULA
    </h1>
    
    {user && 
    <div className="flex p-2">
    <button className="p-2 m-1 mt-3 text-red-800 bg-white rounded-lg hover:bg-red-800 hover:text-white">
      GPT Search
    </button>
    
    <button onClick={handleSignOut} className="text-red-800 p-2 m-1 mt-3 bg-white mx-3 rounded-lg hover:bg-red-800 hover:text-white">Sign Out</button>  
    <img className="w-12 h-12 mt-2" src={user.photoURL} alt="" />
    </div>}
    </div>
  );
}

export default Header;