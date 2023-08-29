import { useFetchYTVideos } from "../../../services/fetchdata/fetchYoutubeVideos";
import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useFetchPosters } from "../../../services/fetchdata/fetchPosters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const InTheaters = () => {
    const queryKeyMovies = 'in-theaters-movies-trailers';
    const queryKeyTrailers = 'in-theaters-trailers'
    const queryParam = 'now_playing';
    const category = 'movie';

    const { isLoading, isError, data, trailersData } = useFetchYTVideos(category, queryKeyMovies, queryKeyTrailers, queryParam);

    const queryKeyPosters = 'posters-inth-trailers';
    // const {posters} = useFetchPosters(queryKeyPosters, trailersData)

    const [showTrailer, setShowTrailer] = useState(true);

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
                                    <Link onClick={handleShow} to={`latest-trailers/:${movie.id}`} state={{ trailer, showTrailer }}>
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

export default InTheaters;
//https://api.themoviedb.org/3/movie/now_playing
// backdrop_path
//original_title
// trailer.results[0].id
// trailer.results[0].key