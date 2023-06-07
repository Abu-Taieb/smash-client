
const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold ">Please Login now!</h1>
    </div>
    <form className="card w-full max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" required className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</div>
    );
};

export default LogIn;