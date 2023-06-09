import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center bg-black h-screen flex items-center">
      <div className="card lg:card-side bg-base-100 w-4/12 mx-auto">
        <div className="card-body">
          <h2 className="font-bold text-4xl text-red-600">Oops!</h2>
          <img
            className="w-full"
            src="../../../../public/404.gif"
            alt="Album"
          />
          <h2 className="font-bold text-4xl text-red-600">Page Not Found</h2>
          <Link to={"/"} className="mx-auto border p-2 rounded-md mt-2">
          <img className="w-24" src="../../../../public/smash-logo-black.png" alt="" />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
