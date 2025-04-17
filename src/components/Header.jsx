import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();

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
    <button onClick={handleSignOut} className="text-white p-4 mt-3">Sign Out ↡</button>
    </div>
  );
}

export default Header;