import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { InfoMovieApi } from '../../utils/MovieApi';
import {
  Section,
  BackLink,
  Box,
  Image,
  BoxInfo,
  Title,
  Score,
  TitleSecondary,
  Overview,
  ListGenres,
  ItemGenres,
  Info,
  ItemLink,
  Link,
} from './MovieDetails.styled';

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
      <BackLink to={location.state?.from ?? '/'}>&#8592; Go back</BackLink>
      {film && (
        <>
          {film.poster_path && (
            <>
              <Box>
                <Image
                  width="300"
                  height="400"
                  src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                  alt={film.title}
                />
                <BoxInfo>
                  <Title>{film.title}</Title>
                  <Score>
                    User Score: {Math.round(film.vote_average * 10)}%
                  </Score>
                  <TitleSecondary>Overview</TitleSecondary>
                  <Overview>{film.overview}</Overview>
                  <TitleSecondary>Genres</TitleSecondary>
                  <ListGenres>
                    {film.genres.map(({ id, name }) => (
                      <ItemGenres key={id}>{name}</ItemGenres>
                    ))}
                  </ListGenres>
                </BoxInfo>
              </Box>
              <Info>
                <TitleSecondary>Additional information</TitleSecondary>
                <ul>
                  <ItemLink>
                    <Link to="cast" state={{ from: location.state.from }}>
                      {''}
                      Cast{''}
                    </Link>
                  </ItemLink>
                  <li>
                    <Link to="reviews" state={{ from: location.state.from }}>
                      {''}
                      Reviews{''}
                    </Link>
                  </li>
                </ul>
              </Info>
              <Outlet />
            </>
          )}
        </>
      )}
    </Section>
  );
}
