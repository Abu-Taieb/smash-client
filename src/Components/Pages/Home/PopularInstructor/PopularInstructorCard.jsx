
const PopularInstructorCard = (instructor) => {
    const{name, image, email, classes, students, numClasses} = instructor.instructor;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Instructor: {name}</h2>
    <h5 className="font-semibold text-sm">Email: {email}</h5>
    <h5 className="font-semibold text-sm">Number of Classes: {numClasses}</h5>
    <h5 className="font-semibold text-sm">Number of Students: {students}</h5>
    <h5 className="font-semibold text-sm">Name of Classes: <span className="border px-2 border-red-200 rounded py-1 mx-1">{classes[0]}</span> <span className="border px-2 border-red-200 rounded py-1 mx-1">{classes[1]}</span></h5>
  </div>
</div>
        </div>
    );
};

export default PopularInstructorCard;