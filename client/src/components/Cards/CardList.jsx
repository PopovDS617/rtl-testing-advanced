import classes from './CardList.module.css';
import Card from './Card';
import { useContext } from 'react';
import { PetsContext } from '../Pets/Pets';

const CardList = () => {
  const { cats, setCatsList } = useContext(PetsContext);

  return (
    <div className={classes['pet-cards-container']}>
      {cats.map((cat, index) => (
        <Card
          key={cat.id}
          name={cat.name}
          phone={cat.phone}
          email={cat.email}
          image={cat.image}
          favoured={cat.favoured}
          index={index}
        />
      ))}
    </div>
  );
};

export default CardList;
