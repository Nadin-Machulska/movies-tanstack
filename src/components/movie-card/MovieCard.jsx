import "./MovieCard.css";
import { Container, Row, Col, Card, Image, Modal } from "react-bootstrap";
import { useFetchMovieDetails } from "../../services/fetchdata/fetchMovieDetails";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import TopBilledCast from "./TopBilledCast";
import Details from "./Details";
import Social from "./social/Social";
import Media from "./Media";
import { useState } from "react";
const MovieCard = () => {

    const { state } = useLocation()
    const { isLoading, data, isError, castData, keywordsData, reviews, movieTrailer } = useFetchMovieDetails(state?.movieId)

    const trailer = movieTrailer?.data?.results?.find(e => e.type === 'Trailer');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (isLoading) {
        return 'Loading'
    }
    if (isError) {
        return 'Oooops'
    }

    return (
        <>
            <Container className='backdrop' fluid style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.data?.backdrop_path})`, backgroundSize: 'cover' }}>
                <Row>
                    <Col className="movie-poster" lg={4}>
                        <Card className="poster">
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data?.data?.poster_path}`} />
                            <Card.Title>
                                <div className="prod-companies">
                                    {data?.data?.production_companies?.map(e => {
                                        return <img className="prodiver-logo" src={`https://image.tmdb.org/t/p/original/${e.logo_path}`} alt="" />
                                    })}
                                </div>
                            </Card.Title>
                        </Card>
                    </Col>
                    <Col className="movie-info" lg={6}>
                        <div>
                            <h1>{data?.data?.title || data?.data?.name}</h1>
                            <div className="facts">
                                <span>{data?.data?.release_date}</span>
                                <span>{data?.data?.original_language.toUpperCase()}</span>
                                <span>{data?.data?.genres.map(e => {
                                    return '' + e.name + ',';
                                })}
                                </span>
                                <span>{(Math.floor(data?.data?.runtime / 60)) + 'h' + (data?.data?.runtime % 60) + 'm'}</span>
                            </div>
                        </div>
                        <div className="auto-actions">
                            <div className="user-score">
                                <div className="user-score-inner" style={{ width: (data?.data?.vote_average / 10) * 100 + '%' }}>
                                    {(data?.data?.vote_average / 10) * 100 + '%'}<span>User Score</span>
                                </div>

                            </div>
                            <div>
                                <button className="movie-card-btn"><FontAwesomeIcon icon={faList} /></button>
                                <span className="toast">Add to list</span>
                            </div>
                            <div>
                                <button className="movie-card-btn"><FontAwesomeIcon icon={faHeart} /></button>
                                <span className="toast">Mark as favourite</span>
                            </div>
                            <div>
                                <button className="movie-card-btn"><FontAwesomeIcon icon={faBookmark} /></button>
                                <span className="toast">Add to your watchlist</span>
                            </div>
                            <div>
                                <button className="movie-card-btn"><FontAwesomeIcon icon={faStar} /></button>
                                <span className="toast">Rate it!</span></div>

                            <div>
                                <a onClick={handleShow} ><FontAwesomeIcon icon={faPlay} /> PLay trailer</a>
                            </div>
                        </div>
                        <div className="movie-card-overview">
                            <p>{data?.data?.tagline}</p>
                            <div className="overview">
                                <h5>Overview</h5>
                                <p>{data?.data?.overview}</p>
                            </div>
                            <div className="producers">
                                {
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="column-wrapper" fluid>
                <div className="content-wrapper">
                    <div className="white-column">
                        <TopBilledCast castData={castData} />
                        <Social reviews={reviews} />
                        <Media data={data?.data} movieTrailer={movieTrailer} movieId={state?.movieId}/>
                    </div>
                    <div className="grey-column">
                        <Details data={data?.data} keywordsData={keywordsData} />
                    </div>
                </div>
            </Container>
            <Modal show={show}>
                <span onClick={handleClose}>x</span>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal>

        </>
    )
};

export default MovieCard;