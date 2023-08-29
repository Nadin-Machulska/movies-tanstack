import { useFetchTrendingData } from '../../../services/fetchdata/trendingFetchData';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
const TrendingToday = () => {
    const queryKey = 'trending-movies-today';
    const queryParam = 'all';
    const timeWindow = 'day'
    const category = 'trending';
    const pageParam = 2
    const { isLoading, data, isError, isPreviousData, isFetching } = useFetchTrendingData(queryKey, queryParam, category, pageParam, timeWindow)

    return (
        <Container fluid className="slide-container">
            {
                (data == undefined) ? console.log(undefined)
                    : (
                        data.data.results.slice(0, 20).map(movie => {
                            return <Card >
                                <Link to={`trendind-today/:${movie.id}`} state={movie.id}>
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

export default TrendingToday;