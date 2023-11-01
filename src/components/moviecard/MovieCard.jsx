import "../../style/Card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ poster, to }) {
  return (
    <Card
      variant="outline-danger"
      as={Link}
      to={to}
      style={{
        width: "18rem",
        margin: "10px",
        background: "rgb(83, 11, 11)",
      }}
      className="Card-component mb-5"
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${poster}`}
      />
    </Card>
  );
}

export default MovieCard;
