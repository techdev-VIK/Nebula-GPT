import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const isGPTSearch = useSelector((store) => store.gpt.showGptSearch);

  const chosenLang = useSelector((store) => store.config.lang);

  console.log(isGPTSearch);

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


   const handleGptSearch = () => {
    // toggle GPT search button

    dispatch(toggleGptSearchView());
   }


   const handleLanguageChange = (e) => {
      const {value} = e.target;

      dispatch(changeLanguage(value));
   }


  return (
    <div className="bg-gradient-to-r from-black to-gray-900 flex justify-between relative z-20">
    <h1 className="text-red-600 text-5xl font-extrabold tracking-tight p-4">
      <NavLink to="/">NEBULA</NavLink>
    </h1>
    
    {user && 
    <div className="flex p-2">
    
    {isGPTSearch && <select value={chosenLang} className="text-white py-2 px-2 my-3 m-1 bg-gray-800/70 rounded-sm" onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((l) => <option key={l.identifier} value={l.identifier}>{l.name}</option>)}

    </select>}

    <button className="py-2 px-2 my-3 m-1 bg-red-800 text-white rounded-lg hover:bg-red-900 cursor-pointer mx-3"
    onClick={handleGptSearch}
    >
      {!isGPTSearch ? "GPT Search" : "Home Page"}
    </button>
    
    <button onClick={handleSignOut} className=" text-white px-2 py-2 my-3 m-1  bg-red-800 mx-3 rounded-lg hover:bg-red-900 cursor-pointer">Sign Out</button>  
    <img className="w-12 h-12 my-2" src={user.photoURL} alt="user" />
    </div>}
    </div>
  );
}

export default Header;