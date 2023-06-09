import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const LogIn = () => {

  const {signIn} = useContext(AuthContext)


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const signInUser = result.user;
      console.log(signInUser);
    })
    .catch(error => console.log(error))
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
