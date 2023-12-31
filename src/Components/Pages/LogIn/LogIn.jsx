import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const { signIn, googleSignIn, fbSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Sign in with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // Sign in with Facebook
  const handleFacebookSignIn = () => {
    fbSignIn()
      .then((result) => {
        const fbUser = result.user;
        console.log(fbUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // Sign in with email & password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Please Login now!</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="card w-full max-w-md shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-red-600 from-10% via-white via-50% to-red-600 to-90% text-red-600 font-bold hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-red-700 hover:to-white ">
                Login
              </button>
            </div>
          </div>
          <div className="flex gap-3 px-10 mb-5">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center gap-2 border border-red-200 rounded p-2 w-1/2 justify-center"
            >
              <p className="font-semibold">Google </p>
              <FaGoogle />
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="flex items-center gap-2 border border-red-200 rounded p-2 w-1/2 justify-center"
            >
              <p className="font-semibold">Facebook </p>
              <FaFacebook />
            </button>
          </div>
          <div className=""></div>
          <div className="px-10 pb-4">
            <p className="font-semibold">
              If you new SMASH? Please{" "}
              <Link to={"/registration"} className="text-red-700 font-bold">
                Registration.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
