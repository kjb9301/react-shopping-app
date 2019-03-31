import React from 'react';
import Section from 'components/common/Section';
import MainContainer from 'containers/MainContainer';

const MainPage = ({location}) => {
  return (
    <Section>
      <MainContainer location={location}/>
    </Section>
  );
};

export default MainPage;