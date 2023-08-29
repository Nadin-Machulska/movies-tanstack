import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBilledCast = ({ castData }) => {
    console.log(castData);
    return (
        <Container className="fading-scroller"  style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Top Billed Cast</h3>
            <div className="slide-container people-scroll">
                {
                    castData?.data?.cast.map(actor => {

                        return <Card key={actor.id} className="card-actor">
                            <Card.Img src={`https://image.tmdb.org/t/p/original/${actor.profile_path
                                }`} />
                            <Card.Title>
                                <h5>{actor.name}</h5>
                                <p>{actor.character
                                }</p>
                            </Card.Title>
                        </Card>
                    })
                }

            </div>
            <Link className="full-cast-link" to={`movie-card/full-cast/:${castData?.id}`} state={{ castData }}>Full Cast Info</Link>

        </Container>
    )
};

export default TopBilledCast;