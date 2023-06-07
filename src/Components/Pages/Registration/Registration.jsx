import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">Please Registration!</h1>
    </div>
    <form className="card w-full max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <input type="text" name="name" placeholder="Name" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="email" name="email" placeholder="Email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="password" placeholder="Password" name="password" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="password" placeholder="Confirm password" name="password" required className="input input-bordered" />
        </div>
        <div className="">
          <input type="file" placeholder="Photo Url" name="password" required className="input" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-red-600 from-10% via-white via-50% to-red-600 to-90% text-red-600 font-bold hover:text-white hover:bg-gradient-to-r hover:from-white hover:via-red-700 hover:to-white ">Sign Up</button>
        </div>
      </div>
      <div className="">
        
      </div>
      <div className="px-10 pb-4">
      <p className="font-semibold">Already have an Account? Please <Link to={'/logIn'} className="text-red-700 font-bold">Log In.</Link></p>
      </div>
    </form>
  </div>
</div>
    );
};

export default Registration;