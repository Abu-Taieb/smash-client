import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const AllClasses = (allClass) => {
  const newClass = allClass.allClass;
  const {
    name,
    email,
    instructor,
    image,
    details,
    seats,
    students,
    price,
    _id,
  } = newClass;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddClass = (newClass) => {
    console.log(newClass);
    if (user && user.email) {
      const classItem = {
        classId: _id,
        instructor: user.displayName,
        price,
        email: user.email,
        image,
        name,
        seats
      };
      fetch("https://smash-server.vercel.app/addClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to add the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-600 font-bold">{name}</h2>
          <p>{details}</p>
          <hr className="border-red-200 py-1" />
          <div className="card-actions justify-between">
            <div className="">
              <h5 className="font-semibold text-sm">
                Instructor: {instructor}
              </h5>
              <h5 className="font-semibold text-sm">Email: {email}</h5>
            </div>
            <div className="">
              <h5 className="font-semibold text-sm">Student: {students}</h5>
              <h5 className="font-semibold text-sm">
                Available Seats: {seats}
              </h5>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-sm">Price: {price}</h5>
            <button
              onClick={() => handleAddClass()}
              className="btn btn-sm bg-gradient-to-r from-red-600 to-white text-white font-bold hover:from-white hover:to-red-600 border-red-300 "
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
