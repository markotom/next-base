import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { get } from 'lodash';

import Typography from '@material-ui/core/Typography';

import { useGetItems } from '../../src/api/hooks';
import { getItems } from '../../src/api';


const Home = ({ initialData }) => {
  const { data } = useGetItems({ initialData });
  const items = get(data, 'data.children', []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="hero">
        {items.map((item) => (
          <div key={item.data.title}>
            <Typography variant="h6">
              {item.data.title}
            </Typography>
            <Typography variant="subtitle1">
              {item.data.subreddit}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const initialData = await getItems();
  return { initialData };
};

Home.propTypes = {
  initialData: PropTypes.shape().isRequired,
};

export default Home;
