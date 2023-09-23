import {useQuery} from 'react-query';
import RecettesService from '../../services/RecettesService';
import FetchState from '../fetchstate/FetchState';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Recettes.css'
import { Link, useParams, useNavigate } from 'react-router-dom';

const recettesService = new RecettesService();

const Recettes = () => {
    const param=useParams();
	const navigate = useNavigate();
	
	const { data, isLoading, isError, error } = useQuery(['recettes', param.name], () => recettesService.getAllRecettes(param.name));
	console.log(data);
	
	return (
		
		<Container className='recettes'>
			<Button onClick={()=>{navigate('/')}}>Retour aux catégories</Button>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
                { data?.meals.map( recette => (
					<Container key={recette.strMeal} className='recetteContainer'>
						<Image className='recetteImage' src={recette.strMealThumb} thumbnail />
						<Link to={`/recettes/${recette.strMeal.replaceAll(" ", "")}/${recette.idMeal}`} >
							{recette.strMeal}
						</Link>
					</Container>
                )) }
			</FetchState>
		</Container>
	)
}

export default Recettes