import fetch from '../../lib/fetch';
import routes from '../config/api';

export default {
  getItems(query) {
    return fetch.get(routes.getItems, query);
  },
  getItem(query) {
    return fetch.get(routes.getItem, query);
  },
};
