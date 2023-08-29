import { Card } from "react-bootstrap";
const PersonSearch = ({searchedPersons}) => {
    console.log(searchedPersons);
    return (
        <div>
            {
                (searchedPersons === undefined) ?
                    console.log(undefined)
                    : searchedPersons.map(movie => {
                        return <Card key={movie.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.profile_path
}`} />
                            <Card.Body>
                                <Card.Title>{movie.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{movie.known_for_department}</Card.Subtitle>
                                <Card.Text>
                                    { movie.known_for.map(item => {
                                      return  <p>{item.original_title}</p>
                                    })}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    })
            }
        </div>
    )
};

export default PersonSearch;