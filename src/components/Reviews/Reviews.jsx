import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsMovieApi } from 'utils/MovieApi';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ReviewsMovieApi(movieId)
      .then(response => setReviews(response.data.results))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 &&
        reviews.map(({ id, author, content, created_at }) => (
          <ul key={id}>
            <li>Author: {author}</li>
            <li>Date: {new Date(created_at).toLocaleDateString()}</li>
            <li>{content}</li>
          </ul>
        ))}
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
    </div>
  );
}
