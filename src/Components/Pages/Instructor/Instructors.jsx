import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div className="w-full mx-auto justify-center p-10 ">
      <div className="text-center md:w-7/12 mx-auto">
        <h2 className="font-bold text-4xl uppercase my-5">
          Our All Instructors
        </h2>
        <hr className="w-20 mx-auto border-2 border-red-600 mb-10" />
        <p className="text-slate-500 text-justify">
          At our academy & instructors are consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {teachers.map((teacher) => (
          <InstructorsCard
            key={teacher._id}
            teacher={teacher}
          ></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
