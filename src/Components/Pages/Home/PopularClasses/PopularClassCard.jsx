
const PopularClassCard = (classes) => {
    const{ name, email, instructor, image, details, seats, students} = classes.classes;
    console.log(classes.classes);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-between">
      <div className="">
        <h5 className="font-semibold text-sm">Instructor: {instructor}</h5>
        <h5 className="font-semibold text-sm">Email: {email}</h5>
      </div>
      <div className="">
        <h5 className="font-semibold text-sm">Student: {students}</h5>
        <h5 className="font-semibold text-sm">Available Seats: {seats}</h5>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularClassCard;