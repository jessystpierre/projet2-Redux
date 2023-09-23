import { useSelector, useDispatch } from "react-redux";
import { favoriteSelector } from "../../favorite/store/favoriteSelector";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import { removeFavorite } from "../../favorite/store/favoriteSlice";

const Favorites = () => {
  const favorites = useSelector(favoriteSelector);
  const dispatch = useDispatch();

  const onClick = (recette) => {
    return dispatch(removeFavorite(recette));
  };

 //strMeal, idMeal , '/recettes/:recette/:id', link
  return (
    <Container className="categories">
      <h1>Mes favoris</h1>
      {favorites.map((recette) => (
        <>
          <Link key={recette.idMeal} to={`/recettes/${recette.strMeal}/${recette.idMeal}`}>
            {recette.strMeal}
          </Link>
          <Button key={recette.strMeal} variant="danger" onClick={ () => { onClick(recette); }}>
            Supprimer
          </Button>
        </>
      ))}
    </Container>
  );
};

export default Favorites;
