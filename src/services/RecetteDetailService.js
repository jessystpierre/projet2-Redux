import { config } from '../config';


class RecetteDetailService {
	baseUrl = config.baseUrl;
	endpoint = 'lookup.php?i=';

	async getAllRecetteDetail(recetteId) {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}${recetteId}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		return await response.json();
	}
}

export default RecetteDetailService;