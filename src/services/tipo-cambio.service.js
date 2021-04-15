import httpClient from './httpClient';

class TipoCambioService {

  URL = '/api/v1/tipo-cambio';

  fetchAll() {
    return httpClient.get(this.URL);
  }

  create(tipoCambio) {
		return httpClient.post(this.URL, tipoCambio);
	}

	update(tipoCambio) {
		return httpClient.put(`${this.URL}/${tipoCambio.id}`, tipoCambio);
	}

  find(id) {
		return httpClient.get(`${this.URL}/${id}`);
	}

  delete(id) {
		return httpClient.delete(`${this.URL}/${id}`);
	}

}

export default new TipoCambioService();