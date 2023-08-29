import { Container, Card } from "react-bootstrap";
import { useFetchSwipersData } from "../../../services/fetchdata/homeFetchData";
import { Link } from "react-router-dom";
const Streaming = () => {
    const queryKey = 'streaming-popular'
    const queryParam = 'tv/day'
    const category = 'trending'
    const pageParam = 1
    const { isLoading, data, isError, isPreviousData, isFetching } = useFetchSwipersData(queryKey, queryParam, category, pageParam)

    return (
        <Container fluid className="slide-container">
            {
                (data == undefined) ? console.log(undefined)
                    : (
                        data.data.results.slice(0, 20).map(movie => {
                            return <Card key={movie.id}>
                                <Link to={`popular-streaming/:${movie.id}`} >
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                                </Link>
                                <Card.Body>
                                    <Card.Title>{movie.name}</Card.Title>
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

export default Streaming;