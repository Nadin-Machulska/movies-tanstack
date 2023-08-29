import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useFetchData } from "../../../services/fetchdata/fetchData";
import { Fragment } from "react";

const TopRatedTv = () => {
    const queryKey = ['toprated-tv'];
    const queryParam = 'top_rated';
    const category = 'tv';

    const { isLoading, data, isError, isPreviousData, isFetching, pageParam,  hasNextPage, fetchNextPage, isFetchingNextPage } = useFetchData(queryKey, queryParam, category)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Oooopss..</h1>
    }
    return (
        <Container>
            <h1>TOP Rated Today</h1>
            <div className="grid">
                {
                    data.pages.map((group, i) => {
                        return (
                            <Fragment key={i}>
                                {
                                    group.data.results.map(movie => {
                                        return <Card style={{ width: '10rem' }} key={movie.id}>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                            <button className="details-btn"><FontAwesomeIcon icon={faEllipsis} /></button>
                                            <Card.Body>
                                                <Card.Title>{movie.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{movie.release_date}</Card.Subtitle>
                                            </Card.Body>
                                        </Card>

                                    })
                                }
                            </Fragment>
                        )
                    })
                }
            </div>
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Show more</button>
            {isFetching && 'Loading..'}
        </Container>
    )
};

export default TopRatedTv;