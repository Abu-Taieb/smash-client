import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Tournaments from "../Tournaments/Tournaments";

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <Tournaments></Tournaments>
        <PopularInstructor></PopularInstructor>
        
        <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;