import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MovieApi } from 'utils/MovieApi';
import {
  Section,
  Title,
  List,
  Link,
  Box,
  Image,
  FilmBox,
  Film,
} from './Home.styled';

export default function Home() {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    MovieApi()
      .then(({ data }) => setMovie(data.results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Section>
      <Title>Trending today</Title>
      <List>
        {movie.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Box>
                <Image
                  width="290"
                  height='434'
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
                <FilmBox>
                  <Film>{title}</Film>
                </FilmBox>
              </Box>
            </Link>
          </li>
        ))}
        <Outlet />
      </List>
    </Section>
  );
}
