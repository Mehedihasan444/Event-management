import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import LatestEvents from "../../Components/LatestEvents/LatestEvents";
import Services from "../../Components/Services/Services";
import UnforgattableTimes from "../../Components/UnforgattableTimes/UnforgattableTimes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestEvents></LatestEvents>
            <Features></Features>
            <UnforgattableTimes></UnforgattableTimes>
            <Services></Services>
        </div>
    );
};

export default Home;