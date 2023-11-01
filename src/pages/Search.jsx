import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "../style/Card.css";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedMovies } from "../redux/actions/movieAction";
import Headers from "../components/headers/Headers";
import MovieCard from "../components/moviecard/MovieCard";

function Search() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const query = searchParams.get("q");

  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getSearchedMovies(query));
  }, [dispatch, query]);

  return (
    <>
      <Headers />
      <Container>
        <h2 className="text-danger p-4">Result Found: {query}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {movies.length > 0 && movies.map((movie, i) => 
            <MovieCard 
              key={i} 
              title={movie.title} 
              poster={movie.poster_path} 
              to={`/users/detail/${movie.id}`}
            />
          )}
        </div>
      </Container>
    </>
  );
}

export default Search;
