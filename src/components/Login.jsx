import { useRef, useState } from "react";
import Header from "./Header";

import { checkValidation } from "../utils/validation";

const Login = () => {

    const [isSignUp, setIsSignUp] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);


    const email = useRef(null);
    const password = useRef(null);


    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidation(email.current.value, password.current.value);

        setErrorMessage(message)

        // console.log(messsage);
    }


  return (
    <div>
      <Header />

      <div className="relative h-screen w-full">

        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="background-img"
          className="w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center my-5">

          <div className="my-5">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-white text-lg mt-4">
              Starts at ₹149. Cancel at any time.
            </p>
          </div>

          {/* Form */}
          <div className="bg-black/50 p-8 md:p-10 rounded-lg text-white">

          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md space-y-6">
            <h2 className="text-4xl">{isSignUp ? "Sign Up" : "Sign In"}</h2>

            {isSignUp && <input
              type="text"
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
    </div>
  );
};

export default Login;
