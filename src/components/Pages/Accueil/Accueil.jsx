import { Helmet } from 'react-helmet-async';
import Section1 from './sections/section1/Section1';
import React from 'react';

function Accueil() {

  return (
    <div className="Accueil">
      <Helmet>
        <title>Hermes</title>
        <meta name='description' content='HomePage'/> 
        <link rel="stylesheet" href="/src/components/Pages/Accueil/sections/section1/Section1.css" />
        <link rel="stylesheet" href="/src/components/Pages/Accueil/sections/section1/Nav-Recherche.css" />
      </Helmet>
      <section>
        <Section1/>
      </section>
    </div>
  );
}

export default Accueil;
