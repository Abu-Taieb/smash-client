
const PCC = (classes) => {
    const{_id, name, email, instructor, image, details, price, seats, students} = classes.classes;
    console.log(classes.classes);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PCC;