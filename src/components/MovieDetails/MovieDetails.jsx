import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { InfoMovieApi } from '../../utils/MovieApi';
import { Section, Link, Box } from './MovieDetails.styled';

export default function MovieDetails() {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    InfoMovieApi(movieId)
      .then(response => setFilm(response.data))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <Section>
      <Link to={location.state?.from ?? '/'}>&#8592; Go back</Link>
      {film && (
        <div>
          {film.poster_path && (
            <>
              <Box>
                <img
                  width="400"
                  src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                  alt={film.title}
                />
                <div>
                  <h2>{film.title}</h2>
                  <p>User Score: {film.vote_average * 10}%</p>
                  <h3>Overview</h3>
                  <p>{film.overview}</p>
                  <h3>Genres</h3>
                  <ul>
                    {film.genres.map(({ id, name }) => (
                      <li key={id}>{name}</li>
                    ))}
                  </ul>
                </div>
              </Box>
              <div>
                <h4>Additional information</h4>
                <Link to="cast" state={{ from: location.state.from }}>
                  {''}
                  Cast{''}
                </Link>
                <Link to="reviews" state={{ from: location.state.from }}>
                  {''}
                  Reviews{''}
                </Link>
                <Outlet />
              </div>
            </>
          )}
        </div>
      )}
    </Section>
  );
}
