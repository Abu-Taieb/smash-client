import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tournaments = () => {
    return (
        <div className="w-full mx-auto justify-center pb-10 mb-10">
        <div className="text-center md:w-7/12 mx-auto">
                <h5 className="font-bold text-lg uppercase mb-2">Our Announcement</h5>
                <hr className="w-20 mx-auto border-2 border-red-600" />
                <h2 className="font-bold text-4xl uppercase my-6">Open YOUR FAVORITE Tournaments</h2>
                <p className="text-slate-500">To gather the most recent and accurate information about the tournament, I recommend visiting reliable sports news websites.</p>
            </div>
        <div className="flex mt-10 pt-5 px-10 gap-12 items-center">
            <div className="w-1/3">
                <img src="https://templatekit.jegtheme.com/smash/wp-content/uploads/sites/308/2022/07/young-woman-playing-badminton-7D3LTYJ-min-min-791x1024.png" alt="" />
            </div>
            <div className="w-2/3 bg-red-50 p-10">
                <div className=""><h3 className="uppercase bg-white py-4 px-3 rounded-3xl font-bold w-96"><span className="bg-black text-white font-bold py-2 px-5  rounded-2xl mr-5">Tournaments</span> coming soon event</h3></div>
                <h2 className="text-4xl uppercase font-bold py-9">Bangladesh <span className="text-red-600">BADMINTON</span>  OPEN 2023</h2>
                <p className="text-slate-500">The Bangladesh Badminton Open is an annual badminton tournament held in Bangladesh. However, as of my knowledge cutoff in September 2021, there is no specific information available regarding the Bangladesh Badminton Open 2021.</p>
                <div className="py-10">
                    <div className="flex gap-5 items-center py-2">
                    <span><FaCalendarAlt/></span> 
                    <h5 className="font-bold text-2xl">SUNDAY, JULY 17TH 2023</h5>
                    </div>
                    <div className="flex gap-5 items-center py-2">
                    <span><FaLocationArrow/></span> 
                    <p className="font-semibold">Badminton Indoor Stadium , Dhaka - Bangladesh</p>
                    </div>
                </div>
                <Link to={'/logIn'} className="btn bg-gradient-to-r from-red-700 to-white text-white font-bold hover:from-white hover:to-red-700 border-0">Buy Ticket</Link>
            </div>
        </div>
        </div>
    );
};

export default Tournaments;