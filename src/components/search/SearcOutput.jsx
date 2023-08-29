import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { useFetchSearchedData } from "../../services/fetchdata/fetchSearchedData";
import { useMemo, useEffect } from "react";
const SearcOutput = ({ inputValue, searchedMovies, setSearchedMovies, searchedTv, setSearchedTv, setSearchedPersons}) => {

    
    const { isLoading, data, isError, isPreviousData, isFetching } = useFetchSearchedData(inputValue);

    // const foundedData = useMemo(() => {
    //     let foundedMovies = [];
    //     let foundedTvs = [];
      
    //     if (data && data.data.results) {
    //       data.data.results.forEach((item) => {
    //         if (item.media_type === 'movie') {
    //             foundedMovies.push(item);
    //             console.log(foundedMovies);
    //         } else if (item.media_type === 'tv') {
    //             foundedTvs.push(item);
    //         }
    //       });
    //     }
      
    //     setSearchedMovies(foundedMovies);
    //     setSearchedTv(foundedTvs);
    //   }, [data, setSearchedMovies, setSearchedTv]);


    // useEffect(() => {

    //     if (data && data.data.results) {
    //         data.data.results.forEach((item) => {
    //           if (item.media_type === 'movie') {
    //             foundedMovies.push(item)
    //           } else if (item.media_type === 'tv') {
    //             foundedTvs.push(item)
    //           }
    //         });
    //       }
    // }, [data, foundedMovies, foundedTvs])

    // setSearchedMovies(foundedMovies);
    // setSearchedTv(foundedTvs);

    useEffect(() => {
        if (data && data.data.results) {
            let foundedMovies = [];
            let foundedTvs = [];
            let foundedPersons = [];
      
            data.data.results.forEach((item) => {
                if (item.media_type === 'movie') {
                    foundedMovies.push(item);
                } else if (item.media_type === 'tv') {
                    foundedTvs.push(item);
                } else if (item.media_type === 'person'){
                    foundedPersons.push(item)
                }
            });

            setSearchedMovies(foundedMovies);
            setSearchedTv(foundedTvs);
            setSearchedPersons(foundedPersons);
        }
    }, [data, setSearchedMovies, setSearchedTv, setSearchedPersons]);

      console.log(searchedMovies, searchedTv);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar className="bg-body-tertiary">
                            <Container>
                                <Navbar.Brand className="navbar-header">Search Results</Navbar.Brand>
                            </Container>
                            <Container>
                                <Navbar.Brand >
                                    <Link to='movies'>
                                        Movies
                                    </Link>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                        <Navbar className="bg-body-tertiary">
                            <Container>
                                <Navbar.Brand>
                                    <Link to='tv'>
                                        Tv
                                    </Link>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                        <Navbar className="bg-body-tertiary">
                            <Container>
                                <Navbar.Brand >
                                    <Link to='persons'>
                                        People
                                    </Link>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Col>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default SearcOutput;
//data.data.results