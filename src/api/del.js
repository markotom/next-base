import fetch from '../../lib/fetch';
import routes from '../config/api';

export default {
  deleteItem(body) {
    return fetch.delete(routes.deleteItem, body);
  },
};
