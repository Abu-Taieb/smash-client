
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
            <div className="">
            <Carousel>
            <div>
                    <img src="https://templatekit.jegtheme.com/smash/wp-content/uploads/sites/308/2022/07/female-badminton-player-celebrating-victory-e1657172850620.jpg" />
                    <h2 className="legend text-3xl">10 AWESOME THINGS YOU CAN LEARN FROM STUDYING BADMINTON</h2>
                </div>
                <div>
                    <img src="https://templatekit.jegtheme.com/smash/wp-content/uploads/sites/308/2022/07/young-women-playing-badminton-at-gym-1-e1657173703217.jpg" />
                    <h2 className="legend text-3xl">HOW BADMINTON IS GOING TO CHANGE YOUR BUSINESS STRATEGIES</h2>
                </div>
                <div>
                    <img src="https://templatekit.jegtheme.com/smash/wp-content/uploads/sites/308/2022/07/young-women-playing-badminton-at-gym-e1657184708714.jpg" />
                    <h2 className="legend text-3xl">NEVER MESS WITH BADMINTON AND HERE’S THE REASONS WHY</h2>
                </div>
                
            </Carousel>
            </div>
    );
};

export default Banner;