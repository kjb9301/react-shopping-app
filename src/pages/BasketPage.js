import React from 'react';
import Section from 'components/common/Section';
import BasketContainer from 'containers/BasketContainer';
import MainContainer from 'containers/MainContainer';

const BasketPage = ({location}) => {
  return (
    <Section>
      <MainContainer location={location}/>
    </Section>
  );
};

export default BasketPage;