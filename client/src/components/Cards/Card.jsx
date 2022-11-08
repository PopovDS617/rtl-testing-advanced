import classes from './Card.module.css';
import heartFilled from '../ui/svg/heartFilled.svg';
import heartOutlined from '../ui/svg/heartOutlined.svg';
import { useContext, useState } from 'react';
import { PetsContext } from '../Pets/Pets';

const Card = ({ name, phone, email, image, favoured, index }) => {
  const { cats, setCatsList } = useContext(PetsContext);
  const [isFavoured, setisFavoured] = useState(favoured);

  const updateFavourite = (index, favoured) => {
    const updatedCats = [...cats];
    updatedCats[index].favoured = favoured;
    setCatsList(updatedCats);
  };

  const toggleFavoured = () => {
    updateFavourite(index, !isFavoured);
    setisFavoured(!isFavoured);
  };

  return (
    <article className={classes.card}>
      <div className={classes['card-header']}>
        <img className={classes['card-img']} src={image.url} alt={image.alt} />
        <button className={classes.heart} onClick={toggleFavoured}>
          {isFavoured ? (
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
