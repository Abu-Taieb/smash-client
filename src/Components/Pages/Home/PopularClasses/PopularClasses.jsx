import { useEffect, useState } from "react";
import PCC from "./PCC";

const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([]);

    useEffect( () => {
        fetch('class.json')
        .then(res => res.json())
        .then(data => setPopularClasses(data))
    }, [])

    return (
        <div className="w-full mx-auto justify-center px-10">
            <div className="text-center w-1/2 mx-auto">
                <h5 className="font-bold text-lg uppercase mb-2">Our Popular Classes</h5>
                <hr className="w-20 mx-auto border-2 border-red-600" />
                <h2 className="font-bold text-4xl uppercase my-6">CHOOSE YOUR FAVORITE CLASSES</h2>
                <p className="text-slate-500">At our academy, we take pride in offering a diverse range of classes designed to cater to different interests and skill levels.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                {
                    popularClasses.map(classes => <PCC 
                        key={classes._id}
                        classes={classes}
                        ></PCC>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;