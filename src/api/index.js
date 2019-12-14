import get from './get';
import post from './post';
import put from './put';
import del from './del';

module.exports = {
  ...get,
  ...post,
  ...put,
  ...del,
};
