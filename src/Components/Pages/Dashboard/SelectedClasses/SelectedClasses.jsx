import { useEffect } from "react";
import { useState } from "react";
import AddClass from "./AddClass";

const SelectedClasses = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes);
  
  useEffect(() => {
    fetch("https://smash-server.vercel.app/addClass?email=taieb01945@gmail.com")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <h2 className="">Selected Classes {classes?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Seats</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          {classes.map((classRow) => <AddClass
          key={classRow._id}
          classRow={classRow}
          ></AddClass>)}
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
