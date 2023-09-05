import {useQuery} from 'react-query';
import CategorieService from '../../services/CategorieService';
import FetchState from '../fetchstate/FetchState';

import Container from 'react-bootstrap/Container';
import './Categories.css'
import { Link } from 'react-router-dom';

const categorieService = new CategorieService();

const Categories = () => {
	const { data, isLoading, isError, error } = useQuery(['categories'], () => categorieService.getAllCategories());
	return (
		<Container className='categories'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
                { data?.categories.map( categorie => (
                    <Link key={categorie.strCategory} to={`/categorie/${categorie.strCategory}`}>
                        {categorie.strCategory}
                    </Link>
                )) }
			</FetchState>
		</Container>
	)
}

export default Categories