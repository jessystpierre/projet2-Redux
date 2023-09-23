import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoriteSlice";
import { favoriteSelector } from "../store/favoriteSelector";
import { Button } from "react-bootstrap";

const FavoriteButton = ({ recette }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(favoriteSelector);
  const isFavorite = favorites.filter((favorite) => favorite.idMeal === recette.idMeal).length > 0;
  console.log(favorites);

  const onClick = () => {
    if (isFavorite) {
      return dispatch(removeFavorite(recette));
    } else {
      return dispatch(addFavorite(recette));
    }
  };

  
  return (
    <Button type="button" variant={isFavorite? `danger`:`success`} className="mt-3" onClick={onClick}>
       { isFavorite ? (
           "Supprimer des favoris"
       ) : (
            "Ajouter des favoris"
       )  }
    </Button>
  );
};

export default FavoriteButton;
