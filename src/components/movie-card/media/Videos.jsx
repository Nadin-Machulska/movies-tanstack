import { Container, Card } from "react-bootstrap";

const Videos = ({ movieTrailer }) => {
    
    return (
        <div className="videos-container">
            <h5>Videos</h5>
            <Container className="slide-container">
                {
                    movieTrailer?.results?.map(trailer => {
                        return <Card className="movie-video-card">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Card>
                    })
                }
            </Container>
        </div>
    )
};

export default Videos;