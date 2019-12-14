import fetch from '../../lib/fetch';
import routes from '../config/api';

export default {
  createItem(body) {
    return fetch.post(routes.createItem, body);
  },
};
