import { FaTelegramPlane } from "react-icons/fa";
const NewsLetter = () => {
    return (
        <div className="md:flex bg-red-600 w-full px-10 justify-center items-center mx-auto py-14 gap-14">
            <div className="w-full md:w-5/12 py-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left leading-snug">SUBSCRIBE OUR NEWSLETTER</h2>
            </div>
            <div className="form-control w-full md:w-7/12 py-5">
  <div className="input-group ">
    <input type="text" placeholder="Enter your email" className="w-full input input-bordered" />
    <button className="btn btn-square w-28">
    <FaTelegramPlane/>
      Subscribe
    </button>
  </div>
</div>
        </div>
    );
};

export default NewsLetter;