import { config } from '../config';


class CategorieService {
	baseUrl = config.baseUrl;
	endpoint = 'categories.php';

	async getAllCategories() {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		return await response.json();
	}
}

export default CategorieService;