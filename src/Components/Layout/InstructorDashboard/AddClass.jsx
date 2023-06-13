import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const addClass = {};
  return (
    <>
      <div className="bg-black text-white p-10 lg:rounded-3xl w-11/12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold uppercase text-center">
            Add A Class
          </h2>
        </div>
        <form className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <input
            type="text"
            name="className"
            placeholder="Class Name"
            className="input input-bordered input-error w-full"
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Class Image"
            className="input input-bordered input-error w-full"
          />
          <input
            type="text"
            name="name"
            placeholder={user?.displayName}
            className="input input-bordered input-error w-full"
            disabled
          />
          <input
            type="text"
            name="name"
            placeholder={user?.email}
            className="input input-bordered input-error w-full"
            disabled
          />
          <input
            type="number"
            name="seats"
            placeholder="Available Seats"
            className="input input-bordered input-error w-full"
          />
          <input
            type="number"
            name="className"
            placeholder="Price $"
            className="input input-bordered input-error w-full"
          />
          <div className="">
            <button
              onClick={addClass}
              className="uppercase border border-red-500 rounded-md p-3"
              type="submit"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
