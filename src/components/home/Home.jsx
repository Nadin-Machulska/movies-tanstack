import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Search from "../search/Search";
import TrendingHome from "./trending-home/TrendingHome";
import WhatsPopularHome from "./whats-popular-home/WhatsPopularHome";
import LatestTrailersHome from "./latest-trailers-home/LatestTrailersHome";
const Home = ({inputValue, setInputValue}) => {

    return (
        <div>
            {/* <Header /> */}
            <Outlet />
            <div>
                <Search inputValue={inputValue} setInputValue={setInputValue}/>
            </div>
            <TrendingHome/>
            {/* <Outlet/> */}
            <LatestTrailersHome/>
            <WhatsPopularHome/>
        </div>
    )
};

export default Home;