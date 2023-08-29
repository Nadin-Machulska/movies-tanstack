import { Tabs, Tab, Container } from "react-bootstrap";
import Backdrops from './media/Backdrops';
import Videos from './media/Videos';
import Posters from './media/Posters';
import MostPopular from './media/MostPopular';
import { useFetchPosters } from "../../services/fetchdata/fetchPosters";


const Media = ({ data, movieTrailer, movieId }) => {

    const { posters } = useFetchPosters(movieId)

    const handleTabChange = (eventKey) => {
        console.log('Selected tab:', eventKey);
    };

    return (
        <Container className='media-container'>
            <h3>Media</h3>
            <div className="media-menu">
                <Tabs defaultActiveKey="tab1" onSelect={handleTabChange}>
                    <Tab eventKey="tab1" title={`Most Popular`}>
                        <MostPopular />
                    </Tab>
                    <Tab eventKey="tab2" title="Videos">
                        <Videos movieTrailer={movieTrailer} />
                    </Tab>
                    <Tab eventKey="tab3" title="Posters">
                        <Posters posters={posters?.posters} />
                    </Tab>
                    <Tab eventKey="tab4" title="Backdrops">
                        <Backdrops backdrops={posters?.backdrops} />
                    </Tab>

                </Tabs>

            </div>

        </Container>
    )
};

export default Media;