import React from 'react';
import Section from 'components/common/Section';
import HomeContainer from 'containers/HomeContainer';

const MainPage = () => {
  console.log("MainPage render")
  return (
    <Section>
      <HomeContainer/>
    </Section>
  );
};

export default MainPage;