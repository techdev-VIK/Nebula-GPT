import { useRef, useState } from "react";
import Header from "./Header";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';

import { auth } from "../utils/firebase";

import { checkValidation } from "../utils/validation";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {

    const [isSignUp, setIsSignUp] = useState(false);


    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null)

    const email = useRef(null);
    const password = useRef(null);


    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidation(email.current.value, password.current.value);

        setErrorMessage(message);

        if(message) return;

        // console.log(messsage);


        if(isSignUp){

          //sign up

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          })
          .then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
                      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
            
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;

          setErrorMessage(errorCode + " " + errorMsg)
        }) 
        }else{

          // sign in

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user)
          })
          .catch((error) => {
            setErrorMessage("Invalid username or password.")
          });
        }
    }


  return (
    <div>
      <Header />

      <div className="absolute w-full -z-10">

        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="background-img"
          className="w-full h-dvh object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 w-full"></div>
        </div>

        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center px-4 text-center my-5">

          <div className="my-5">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-white text-lg mt-4 mx-auto">
              Starts at ₹149. Cancel at any time.
            </p>
          </div>

          {/* Form */}
          <div className="bg-black/50 p-8 md:p-10 rounded-lg text-white">

          <form onSubmit={handleSubmit} className=" flex flex-col w-full max-w-md space-y-6">
            <h2 className="text-4xl">{isSignUp ? "Sign Up" : "Sign In"}</h2>

            {isSignUp && <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-4 rounded bg-gray-800"
            />}

            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="p-4 rounded bg-gray-800"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 rounded bg-gray-800"
            />
            <button className="bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold w-full mx-auto my-5">
            {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <p className="text-red-600 w-full max-w-md text-sm font-bold text-xl py-3">{errorMessage}</p>

          {!isSignUp && <div className="my-5">
            <p className="text-white text-sm">
              <span className="cursor-pointer" onClick={() => setIsSignUp(true)}>New User? Sign Up Here</span>
            </p>
          </div>}

          {isSignUp && <div className="my-5">
            <p className="text-white text-sm" onClick={() => setIsSignUp(false)}>
                <span className="cursor-pointer">Already have an account? Sign In</span>{" "}              
            </p>
          </div>}

          <div>
            <p className="text-white text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
        </div>
      </div>
    // </div>
  );
};

export default Login;
