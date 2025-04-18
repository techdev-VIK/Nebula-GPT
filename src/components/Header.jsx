import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      //sign out
      navigate('/');
    }).catch((error) => {
      //error
      navigate('/error')
    })
  }
  return (
    <div className="bg-gradient-to-r from-black to-red-900 flex justify-between">
    <h1 className="text-red-600 text-5xl font-extrabold tracking-tight p-4">
      NEBULA
    </h1>
    
    {user && 
    <div className="flex p-2">
    <img className="w-12 h-12 mt-4" src={user.photoURL} alt="" />
    <button onClick={handleSignOut} className="text-white p-2 mt-3">Sign Out ↡</button>  
    </div>}
    </div>
  );
}

export default Header;