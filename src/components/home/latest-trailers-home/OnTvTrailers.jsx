import { Container, Card } from "react-bootstrap";
import { useFetchYTVideos } from "../../../services/fetchdata/fetchYoutubeVideos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const OnTv = () => {
    const queryKeyMovies = 'on-tv-shows-trailers';
    const queryKeyTrailers = 'on-tv-trailers'
    const queryParam = 'top_rated';
    const category = 'tv';


    const { isLoading, isError, data, trailersData } = useFetchYTVideos(category, queryKeyMovies, queryKeyTrailers, queryParam);

    const [showTrailer, setShowTrailer] = useState(true);

    // console.log(trailersData);

    const handleShow = () => setShowTrailer(true);

    return (
        <Container className="slide-container" fluid>
            {
                data?.results
                    ?.map(movie => {

                        const videoInfo = trailersData?.find(e => e.id === movie.id)
                        const trailer = videoInfo?.results?.find(e => e.type == 'Trailer' || e.type == 'Teaser')
                        if (videoInfo?.results?.length !== 0) {
                            return <Card className="trailers-card" key={movie.id} onClick={handleShow}>
                                <Card.Body>
                                    <Link onClick={handleShow} to={`ontv-trailers/:${movie.id}`} state={{ trailer, showTrailer }}>
                                        <img className="trailer-img" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                                        <span className="play-icon"><FontAwesomeIcon icon={faPlay} /></span>
                                    </Link>
                                    <span className="movie-text">{movie.name || movie.title}</span>
                                </Card.Body>

                            </Card>
                        }
                    })
            }
        </Container>
    )
};

export default OnTv;
//https://api.themoviedb.org/3/tv/airing_today