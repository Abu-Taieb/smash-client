const PopularInstructorCard = (instructor) => {
  const { name, image, email, students } = instructor.instructor;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-2xl">
        <figure>
          <img src={image} alt="instructor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor: {name}</h2>
          <h5 className="font-semibold text-sm">Email: {email}</h5>

          <h5 className="font-semibold text-sm">
            Number of Students: {students}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
