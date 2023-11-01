import  { useState, useEffect } from 'react';
import axios from 'axios';

function MovieTrailer({ movieId, apiKey }) {
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
      .then((response) => {
        const trailers = response.data.results;
        if (trailers.length > 0) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailers[0].key}`);
        }
      })
      .catch((error) => {
        console.error('Error fetching trailer:', error);
      });
  }, [movieId, apiKey]);

  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={trailerUrl}
        title="Movie Trailer"
        allowFullScreen >
      </iframe>
    </div>
  );
}

export default MovieTrailer;
