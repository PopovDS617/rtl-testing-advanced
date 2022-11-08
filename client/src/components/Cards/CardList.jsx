import classes from './CardList.module.css';
import Card from './Card';

const CardList = ({ cats, setCatsList }) => {
  const updateFavourite = (index, favoured) => {
    const updatedCats = [...cats];
    updatedCats[index].favoured = favoured;
    setCatsList(updatedCats);
  };

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
          updateFavourite={updateFavourite}
          index={index}
        />
      ))}
    </div>
  );
};

export default CardList;
