import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import LatestEvents from "../../Components/LatestEvents/LatestEvents";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestEvents></LatestEvents>
            <Features></Features>
        </div>
    );
};

export default Home;