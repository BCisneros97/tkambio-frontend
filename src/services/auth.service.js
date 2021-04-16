import httpClient from './httpClient';
import { setUser, removeUser } from './auth-storage.service';

class AuthService {

  AUTH_URL = '/api/v1/auth';

  login(user) {
    return httpClient.post(this.AUTH_URL + '/login', user)
      .then(({data}) => {
        setUser(data);
        return data;
      });
  }

  logout() {
    return httpClient.post(this.AUTH_URL + '/logout')
      .then(({data}) => {
        removeUser();
        return data;
      });
  }

}

export default new AuthService();