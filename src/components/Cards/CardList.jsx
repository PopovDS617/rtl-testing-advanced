import classes from './CardList.module.css';
import Card from './Card';

const CardList = ({ cats }) => {
  return (
    <div className={classes['pet-cards-container']}>
      {cats.map((cat) => (
        <Card
          key={cat.id}
          name={cat.name}
          phone={cat.phone}
          email={cat.email}
          image={cat.image}
          favored={cat.favored}
        />
      ))}
    </div>
  );
};

export default CardList;
