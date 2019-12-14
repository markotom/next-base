import { useMemo } from 'react';
import useSWR from 'swr';
import Route from 'route-parser';
import { forEach, upperFirst } from 'lodash';

import fetch from '../../lib/fetch';
import routes from '../config/api';

import get from './get';

const hooks = {};

forEach(get, ({ name }) => {
  function useGetHook(options, query = {}) {
    const initialQuery = query;

    const route = new Route(routes[name]);
    const actualRoute = route.reverse(query);

    const params = route.match(actualRoute);
    forEach(params, (param, key) => delete initialQuery[key]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const actualQuery = useMemo(() => initialQuery, []);
    return useSWR([actualRoute, actualQuery], fetch.get, options);
  }

  hooks[`use${upperFirst(name)}`] = useGetHook;
});

module.exports = hooks;
