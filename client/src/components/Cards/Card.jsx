import classes from './Card.module.css';
import heartFilled from '../ui/svg/heartFilled.svg';
import heartOutlined from '../ui/svg/heartOutlined.svg';
import { useState } from 'react';

const Card = ({
  name,
  phone,
  email,
  image,
  favoured,
  index,
  updateFavourite,
}) => {
  const [isFavored, setIsFavored] = useState(favoured);

  const toggleFavoHandler = () => {
    updateFavourite(index, !isFavored);
    setIsFavored(!isFavored);
  };

  return (
    <article className={classes.card}>
      <div className={classes['card-header']}>
        <img className={classes['card-img']} src={image.url} alt={image.alt} />
        <button className={classes.heart} onClick={toggleFavoHandler}>
          {isFavored ? (
            <img src={heartFilled} alt="filled heart" />
          ) : (
            <img src={heartOutlined} alt="outlined heart" />
          )}
        </button>
      </div>
      <div className={classes['card-content']}>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  );
};
export default Card;
