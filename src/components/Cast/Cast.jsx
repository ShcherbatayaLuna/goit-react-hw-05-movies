import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastMovieApi } from '../../utils/MovieApi';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    CastMovieApi(movieId)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <ul>
      {cast.length > 0 &&
        cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png`
              }
              alt={character}
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}
