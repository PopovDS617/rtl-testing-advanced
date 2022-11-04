import classes from './Card.module.css';
import heartFilled from '../components/ui/svg/heartFilled.svg';
import heartOutlined from '../components/ui/svg/heartOutlined.svg';
import { useState } from 'react';

const Card = ({ name, phone, email, image, favoured }) => {
  const [isFavored, setIsFavored] = useState(favoured);

  const toggleFavoredHandler = () => {
    setIsFavored((prev) => !prev);
  };

  return (
    <div className={classes.card}>
      <div className={classes['card-header']}>
        <img className={classes['card-img']} src={image.url} alt={image.alt} />
        <button className={classes.heart} onClick={toggleFavoredHandler}>
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
    </div>
  );
};
export default Card;
