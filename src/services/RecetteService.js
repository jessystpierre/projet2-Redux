import { config } from '../config';


class RecetteService {
	baseUrl = config.baseUrl;
	endpoint = 'categories.php';

	async getAllRecettes() {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		return await response.json();
	}
}

export default RecetteService;