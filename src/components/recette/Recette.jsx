import {useQuery} from 'react-query';
import RecetteDetailService from '../../services/RecetteDetailService';
import FetchState from '../fetchstate/FetchState';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import './Recette.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams, useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import FavoriteButton from '../../favorite/components/FavoriteButton';

const recetteDetailService = new RecetteDetailService();
const Recette = () => {
    const params = useParams();
    const navigate = useNavigate();
	const { data, isLoading, isError, error } = useQuery(['recette', params.id], () => recetteDetailService.getAllRecetteDetail(params.id));
    const ingredients = [];
    const mesures = [];
    for (let i = 1; i < 21; i++) {
        if (data?.meals[0][`strIngredient${i}`] === "") break;
        ingredients.push(data?.meals[0][`strIngredient${i}`]);
        mesures.push(data?.meals[0][`strMeasure${i}`]);
    }
    
	return (
		<Container className='recetteContent'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
                <Button onClick={()=>{navigate('/')}}>Retour aux catégories</Button>
                <FavoriteButton recette={data?.meals[0]} />
                <h1 className='text-center'>{data?.meals[0].strMeal}</h1>
                <h2 className='text-center'>Catégorie : {data?.meals[0].strCategory}</h2>
                <Image className='recetteImg' src={data?.meals[0].strMealThumb} fluid />
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ingrédients et instructions</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                        <ListGroup.Item>
                                            {data?.meals[0].strInstructions}
                                        </ListGroup.Item>
                                    { ingredients.map( (ingredient, index) => (
                                        <ListGroup.Item key={index}>
                                            {ingredient + " " + mesures[index]}
                                        </ListGroup.Item>
                                    )) }
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
			</FetchState>
		</Container>
	)
}

export default Recette