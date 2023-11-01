import { Button, Carousel } from "react-bootstrap";
import axios from "axios";
import "../../style/Navbar.css";
import { useEffect, useState } from "react";
import NavigationBar from "../navigation/NavigationBar";

function Headers() {
  const [detailMovie, setDetailMovie] = useState({});
  const [detailMovie2, setDetailMovie2] = useState({});
  const [detailMovie3, setDetailMovie3] = useState({});

  useEffect(() => {
    async function getDetailMovie() {
      const apiKey = import.meta.env.VITE_KEY_API_TMBD;
      const urlTMDB = import.meta.env.VITE_LINK_API_TMBD;
      try {
        const response = await axios.get(`${urlTMDB}/807172?api_key=${apiKey}&language=en-US`);
        const response2 = await axios.get(`${urlTMDB}/507089?api_key=${apiKey}&language=en-US`);
        const response3 = await axios.get(`${urlTMDB}/955531?api_key=${apiKey}&language=en-US`);
        setDetailMovie(response.data);
        setDetailMovie2(response2.data);
        setDetailMovie3(response3.data);
      } catch (error) {
        alert(error);
      }
    }

    getDetailMovie();
  }, []);

  return (
    <>
      <NavigationBar/>
      <Carousel>
        <Carousel.Item>
          <img className="Carousel-img d-block w-100 h-100" src={`https://image.tmdb.org/t/p/original${detailMovie?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie?.title}</h2>
            <p className="Movie-caption-text">{detailMovie?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Carousel-img d-block w-100 h-100" src={`https://image.tmdb.org/t/p/original${detailMovie2?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie2?.title}</h2>
            <p className="Movie-caption-text">{detailMovie2?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Carousel-img d-block w-100 h-100" src={`https://image.tmdb.org/t/p/original${detailMovie3?.backdrop_path}`} alt="First slide" />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie3?.title}</h2>
            <p className="Movie-caption-text">{detailMovie3?.overview}</p>
            <Button className="Movie-caption-button" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Headers;
