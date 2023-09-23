import { config } from '../config';


class RecettesService {
	baseUrl = config.baseUrl;
	endpoint = 'filter.php?c=';

	async getAllRecettes(categorie) {
	
		const response = await fetch(`${this.baseUrl}/${this.endpoint}${categorie}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		return await response.json();
	}
}

export default RecettesService;