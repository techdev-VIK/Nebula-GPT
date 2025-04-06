import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="relative h-screen w-full">

        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="background-img"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-8">

          <div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-white text-lg mt-4">
              Starts at ₹149. Cancel at any time.
            </p>
          </div>

          {/* Form */}
          <form className="bg-black bg-opacity-60 p-8 md:p-10 rounded-lg flex flex-col w-full max-w-md space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold w-1/2 mx-auto my-5">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
