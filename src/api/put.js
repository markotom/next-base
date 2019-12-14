import fetch from '../../lib/fetch';
import routes from '../config/api';

export default {
  updateItem(body) {
    return fetch.put(routes.updateItem, body);
  },
};
