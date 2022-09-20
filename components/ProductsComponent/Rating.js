import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Rating({rating,reviews}){

  const noOfReviews=`${rating}(${reviews})`;
  return !rating ? (
    <div></div>
  ) : (
    <div className="product-detail-ratings">
      <span className="rating-star">
        <FontAwesomeIcon
          icon={
            rating >= 1
              ? ['fas','star']
              : rating >= 0.5
              ? ['fas','star-half-alt']
              : ['far','star']
          }
        />
      </span>
      <span className="rating-star">
      <FontAwesomeIcon
          icon={
            rating >= 2
            ? ['fas','star']
              : rating >= 1.5
              ? ['fas','star-half-alt']
              : ['far','star']
          }
          />
      </span>
      <span className="rating-star">
      <FontAwesomeIcon
          icon={
            rating >= 3
            ? ['fas','star']
              : rating >= 2.5
              ? ['fas','star-half-alt']
              : ['far','star']
          }
          />
      </span>
      <span className="rating-star">
      <FontAwesomeIcon
          icon={
            rating >= 4
            ? ['fas','star']
              : rating >= 3.5
              ? ['fas','star-half-alt']
              : ['far','star']
          }
          />
      </span>
      <span className="rating-star">
      <FontAwesomeIcon
          icon={
            rating >= 5
            ? ['fas','star']
              : rating >= 4.5
              ? ['fas','star-half-alt']
              : ['far','star']
          }
          />
      </span>
      <span className="reviews-count">{reviews ? noOfReviews: ''}</span>
    </div>
  );
}

export default Rating;