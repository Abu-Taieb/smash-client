import { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="w-full mx-auto justify-center p-10 ">
      <div className="text-center md:w-7/12 mx-auto">
        <h5 className="font-bold text-lg uppercase mb-2">
          Our Popular Instructors
        </h5>
        <hr className="w-20 mx-auto border-2 border-red-600" />
        <h2 className="font-bold text-4xl uppercase my-6">
          CHOOSE YOUR FAVORITE Instructor
        </h2>
        <p className="text-slate-500">
          At our academy, we take pride in offering a diverse range of classes
          designed to cater to different interests and skill levels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {instructors.map((instructor) => (
          <PopularInstructorCard
            key={instructor._id}
            instructor={instructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
