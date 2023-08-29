import Card from 'react-bootstrap/Card';
const MovieSearch = ({ searchedMovies }) => {
    // console.log(searchedMovies);
    return (
        <div>
            {
                (searchedMovies === undefined) ?
                    console.log(undefined)
                    : searchedMovies.map(movie => {
                        return <Card key={movie.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{movie.release_date}</Card.Subtitle>
                                <Card.Text>
                                    {movie.description }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    })
            }
        </div>
    )
};

export default MovieSearch;