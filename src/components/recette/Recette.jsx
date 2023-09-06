import {useQuery} from 'react-query';
import RecetteDetailService from '../../services/RecetteDetailService';
import FetchState from '../fetchstate/FetchState';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import './Recette.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const recetteDetailService = new RecetteDetailService();
const Recette = () => {
    const params = useParams();
	const { data, isLoading, isError, error } = useQuery(['recette', params.id], () => recetteDetailService.getAllRecetteDetail(params.id));
    const ingredients = [];
    const mesures = [];
    for (let i = 1; i < 21; i++) {
        if (data?.meals[0][`strIngredient${i}`] === "") break;
        ingredients.push(data?.meals[0][`strIngredient${i}`]);
        mesures.push(data?.meals[0][`strMeasure${i}`]);
    }
    console.log(ingredients, mesures);
	return (
		
		<Container className=''>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ingredients</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
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