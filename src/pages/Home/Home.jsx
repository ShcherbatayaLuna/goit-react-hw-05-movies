import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MovieApi } from 'utils/MovieApi';
import { Section, Title, Link } from './Home.styled';

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
      <ul>
        {movie.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
        <Outlet />
      </ul>
    </Section>
  );
}
