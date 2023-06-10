const AllClasses = (allClass) => {
  const { name, email, instructor, image, details, seats, students, price } =
    allClass.allClass;
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
            <button className="btn btn-sm bg-gradient-to-r from-red-600 to-white text-white font-bold hover:from-white hover:to-red-600 border-red-300 ">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
