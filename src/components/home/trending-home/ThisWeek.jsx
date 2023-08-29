import { Container } from "react-bootstrap";
import { useFetchTrendingData } from "../../../services/fetchdata/trendingFetchData";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const ThisWeek = () => {
    const queryKey = 'trending-movies-week';
    const queryParam = 'all';
    const category = 'trending';
    const timeWindow = 'week'
    const pageParam = 1

    const { isLoading, data, isError, isPreviousData, isFetching } = useFetchTrendingData(queryKey, queryParam, category, pageParam, timeWindow)
    console.log(data);
    return (
        <Container fluid className="slide-container">
            {
                (data == undefined) ? console.log(undefined)
                    : (
                        data.data.results.slice(0, 20).map(movie => {
                            const movieId = movie.id
                            return <Card >
                                <Link to={`trendind-week/:${movie.id}`} state={{movieId}}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                                </Link>
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        })
                    )
            }

        </Container>

    )
};

export default ThisWeek;