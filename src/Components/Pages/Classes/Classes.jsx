import { useEffect, useState } from "react";
import AllClasses from "./AllClasses";

const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetch("class.json")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);

  return (
    <div className="w-full mx-auto justify-center p-10">
      <div className="text-center md:w-7/12 mx-auto">
        <h2 className="font-bold text-4xl uppercase my-5">Our All CLASSES</h2>
        <hr className="w-20 mx-auto border-2 border-red-600 mb-10" />
        <p className="text-slate-500 text-justify">
          At our academies all classes are here and you enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. we take pride in offering a diverse range of
          classes designed to cater to different interests and skill levels.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {allClasses.map((allClass) => (
          <AllClasses key={allClass._id} allClass={allClass}></AllClasses>
        ))}
      </div>
    </div>
  );
};

export default Classes;
