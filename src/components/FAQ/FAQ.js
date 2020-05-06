import React from 'react';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import { listData, faqContents } from '../../data/dataStore';

const Faq = () => {
  const image = listData.image;

  const questions = Object.keys(faqContents.subtitle).map(q => {
    return <ul key={q}>{faqContents.subtitle[q]}</ul>;
  });

  const title = faqContents.title;

  const backgroundTitle = faqContents.backgroundTitle;

  return(
    <Container>
      <div>
        <h3>{title}</h3>
        {questions}
        <Hero titleText={backgroundTitle} imageSrc={image} />
      </div>
    </Container>

  );
};

export default Faq;