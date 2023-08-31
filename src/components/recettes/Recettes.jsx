import {useQuery} from 'react-query';
import RecetteService from '../../services/RecetteService';
import FetchState from '../fetchstate/FetchState';

import Container from 'react-bootstrap/Container';
import './Recettes.css'
import { Link } from 'react-router-dom';

const recetteService = new RecetteService();

const Recettes = () => {
	const { data, isLoading, isError, error } = useQuery(['recettes'], () => recetteService.getAllRecettes());
	return (
		<Container className='categories'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
                { data?.categories.map( recette => (
                    <Link to={`/recette/${recette.strCategory}`}>
                        {recette.strCategory}
                    </Link>
                )) }
			</FetchState>
		</Container>
	)
}

export default Recettes