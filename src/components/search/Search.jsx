import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Search = ({inputValue, setInputValue}) => {
 return (
        <Container fluid className='search-container'>
            <h1>Ласкаво просимо.
Мільйони фільмів, серіалів і персон. Досліджуйте зараз.</h1>
            <Form className="d-flex" >
                  <Form.Control
                    type="search"
                    placeholder="Search movie, tv, persons..."
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        console.log(inputValue);
                    }}
                  />
                  <Button className='search-btn' variant="outline-success"><Link to='search-output' >Search</Link></Button>
                </Form>
        </Container>
)
};

export default Search;