import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import LatestEvents from "../../Components/LatestEvents/LatestEvents";
import Services from "../../Components/Services/Services";
import UnforgettableTimes from "../../Components/UnforgettableTimes/UnforgettableTimes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestEvents></LatestEvents>
            <Features></Features>
            <UnforgettableTimes></UnforgettableTimes>
            <Services></Services>
        </div>
    );
};

export default Home;