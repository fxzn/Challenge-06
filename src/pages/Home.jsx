import { Container, Row, Col } from "react-bootstrap";
import Headers from "../components/headers/Headers";
import MovieCard from "../components/moviecard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularMovies } from "../redux/actions/movieAction";

function Home() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <>
      <Headers />
      <Container>
        <Row className="mx-4 py-3">
          <Col xs={12} md={8}>
            <div className="">
              <h1 style={{ color: "red" }}>Popular Movies</h1>
            </div>
          </Col>

          <Col className="d-flex justify-content-end px-3" xs={6} md={4}>
            <div className="d-flex align-items-center ">
              <button type="button" style={{ border: "none", background: "black", color: "red" }}>
                Load More
              </button>
            </div>
          </Col>
        </Row>

        {movies.length > 0 ? ( // Render the movie cards if there are posts
          <div className="d-flex flex-wrap justify-content-center">
            {movies.map((movie, i) => (
              <MovieCard key={i} poster={movie.poster_path} to={`/users/detail/${movie.id}`} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-3">
            <p style={{ fontSize: "38px", color: "white" }}>Please Login To View Data</p>
          </div>
        )}
      </Container>
    </>
  );
}

export default Home;
