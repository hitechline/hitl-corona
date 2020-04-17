import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import List from '~/components/List';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const StateInformationPage = ({ state }) => (
  <Layout>
    <Head
      title={`Covid Agora - ${state.state}`}
      description="Veja como anda o coronavírus em seu estado, e avise a seus familiares."
      image={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
    />

    <List
      local={`${state.state} - ${state.uf}`}
      flag={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
      lastUpdate={state.datetime}
      info={state}
    />
  </Layout>
);

// eslint-disable-next-line consistent-return
StateInformationPage.getInitialProps = async ({ query: { uf }, res }) => {
  const back = () => {
    res.writeHead(301, { Location: '/states' });
    res.end();
  };

  try {
    const data = await api.get(`brazil/uf/${uf}`).then(r => r.data);

    if (data.error) back();

    return {
      state: objectLocaleString({
        ...data,
        cases: data.suspects,
        confirmed: data.cases,
      }),
    };
  } catch (e) {
    back();
  }
};

StateInformationPage.propTypes = {
  state: PropTypes.shape({
    state: PropTypes.string,
    uf: PropTypes.string,
    datetime: PropTypes.string,
  }).isRequired,
};

export default StateInformationPage;
