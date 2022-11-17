import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsMovieApi } from 'utils/MovieApi';
import { Box, ListItem, Title, Text } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ReviewsMovieApi(movieId)
      .then(response => setReviews(response.data.results))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <Box>
      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <ul key={id}>
            <ListItem>
              <Title>Author: {author}</Title>
              <Text>{content}</Text>
            </ListItem>
          </ul>
        ))}
      {reviews.length === 0 && <Text>We don't have any reviews for this movie.</Text>}
    </Box>
  );
}
