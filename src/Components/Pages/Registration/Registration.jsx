import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const signUpUser = result.user;
      console.log(signUpUser);
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="">
        <div className="text-center mb-10">
          <h1 className="text-5xl font -bold">Please Registration!</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card w-full max-w-md shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-400">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*"])/,
                })}
                name="password"
                className="input input-bordered"
              />

              {/* {errors.password && <span className="text-red-400">Password is required</span>} */}
              {errors.password?.type === "required" && (
                <p className="text-red-400">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-400">Password minimum 6 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-400">
                  Minimum one capital letter & special character
                </p>
              )}
            </div>

            {/*         
        <div className="form-control">
          <input type="password" placeholder="Confirm password" {...register("confirmPassword", { required: true})} name="confirmPassword" className="input input-bordered" />
          {errors.confirmPassword && <span className="text-red-400">Password is required</span>}
        </div> */}

            <div className="mt-2">
              <input
                type="file"
                placeholder="Photo Url"
                {...register("file", { required: true })}
                name="file"
              />
              {errors.file && (
                <span className="text-red-400">
                  <br />
                  Image is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="Submit"
                defaultValue="Sign Up"
                className="btn bg-gradient-to-r from-red-600 from-10% via-white via-50% to-red-600 to-90% text-red-600 font-bold hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-red-700 hover:to-white "
              />
            </div>
          </div>
          <div className=""></div>
          <div className="px-10 pb-4">
            <p className="font-semibold">
              Already have an Account? Please{" "}
              <Link to={"/logIn"} className="text-red-700 font-bold">
                Log In.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
