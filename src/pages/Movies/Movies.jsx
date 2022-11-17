import { useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { SearchMovieApi } from 'utils/MovieApi';
import {
  Section,
  List,
  Form,
  Label,
  Input,
  Button,
  Loader,
  Link,
  Title,
} from './Movies.styled';

export default function Movies() {
  const [film, setFilm] = useState([]);
  const [query, setQuery] = useState(null);
  const [button, setButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('query') ?? '';

  const handleChange = event => {
    setButton(false);
    const query = event.target.value;
    setQuery(query !== '' ? { query } : {});
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(query);
    if (!query) {
      setButton(true);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    SearchMovieApi(searchQuery)
      .then(({ data }) => setFilm(data.results))
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));
  }, [searchQuery]);

  return (
    <>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input type="text" onChange={handleChange} />
          </Label>
          <Button disabled={button} type="submit">
            Search
          </Button>
        </Form>
        {loading && (
          <Loader>
            <ThreeDots
              height="120"
              width="120"
              radius="12"
              color="#f89999"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Loader>
        )}
      </Section>
      <Section>
        <List>
          {' '}
          {film.map(({ id, title, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    width="500"
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                  <Title>{title}</Title>
                </Link>
              </li>
            );
          })}
          <Outlet />
        </List>
      </Section>
    </>
  );
}
