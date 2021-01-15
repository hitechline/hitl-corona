import moment from 'moment';
import localization from 'moment/locale/pt-br';
import PropTypes from 'prop-types';
import React from 'react';

import { Container, Header, ItemsContainer, Item } from './styles';

const ListComponent = ({ local, flag, lastUpdate, info = {} }) => (
  <Container>
    <Header>
      <h1>COVID-19 ({local})</h1>
      <img src={flag} alt="Local Flag" />
      <p>Dados oficais e atualizados em tempo real.</p>
    </Header>

    <ItemsContainer>
      <Item>
        <p style={{ color: '#3baa1b' }}>{info.confirmed}</p>
        <span>CASOS CONFIRMADOS</span>
      </Item>

      <Item>
        <p style={{ color: '#eac822' }}>{info.suspects}</p>
        <span>SUSPEITOS</span>
      </Item>

      <Item>
        <p style={{ color: '#d51616' }}>{info.deaths}</p>
        <span>ÓBITOS</span>
      </Item>

      {info.recovered && (
        <Item>
          <p style={{ color: '#1678d5' }}>{info.refuses}</p>
          <span>CURADOS</span>
        </Item>
      )}
    </ItemsContainer>

    <p style={{ fontSize: '1.5rem' }}>
      Ùltima Atualização:{' '}
      <strong>
        {moment(lastUpdate).locale('pt-br', localization).format('LLL')}
      </strong>
    </p>
    <p style={{ fontSize: '1.3rem', margin: '25px' }}>
      *Os números de <b>Suspeitos</b> & <b>Curados</b> foram removidos por
      motivos desconhecidos do site do governo portanto nós da{' '}
      <b>Covid Agora</b> achamos necessário remover os dados e atualizar o
      site.*
    </p>
  </Container>
);

ListComponent.propTypes = {
  local: PropTypes.string,
  flag: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  lastUpdate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  info: PropTypes.shape({
    confirmed: PropTypes.string,
    suspects: PropTypes.string,
    deaths: PropTypes.string,
    refuses: PropTypes.string,
  }).isRequired,
};

ListComponent.defaultProps = {
  flag: 'Retrieving...',
  local: 'Retrieving...',
  lastUpdate: 0,
};

export default ListComponent;
