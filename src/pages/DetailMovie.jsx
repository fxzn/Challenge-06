import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Carousel, Modal } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import "../style/Detail.css";
import NavigationBar from "../components/navigation/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieDetails } from "../redux/actions/movieAction";
import MovieTrailer from "./MovieTrailer";

function DetailMovie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movieDetails } = useSelector((state) => state.movies);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  const handleOpenTrailer = () => {
    setShowTrailer(true);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <>
      <NavigationBar />
      <Carousel controls={false} className="w-100">
        <Carousel.Item>
          <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="text-start">
            <h1 className="">{movieDetails?.title}</h1>
            <p className="">
              {movieDetails?.genres &&
                movieDetails?.genres?.length > 0 &&
                movieDetails?.genres?.map((genre, i) => {
                  return i === movieDetails?.genres.length - 1 ? genre.name : `${genre.name}, `;
                })}
            </p>
            <p className="">{movieDetails?.overview}</p>
            <p className="text-warning fs-4">
              <StarFill className="Icon-star" />
              {movieDetails?.vote_average ? movieDetails.vote_average.toFixed(1) : "-"}
            </p>
            <Button className="Movie-caption-button mb-5" variant="danger" onClick={handleOpenTrailer}>
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Modal show={showTrailer} onHide={handleCloseTrailer}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Movie Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MovieTrailer movieId={id} apiKey={import.meta.env.VITE_KEY_API_TMBD} onClose={handleCloseTrailer}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DetailMovie;
