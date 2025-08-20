import React, { useEffect } from 'react';
import Intro from '../components/Intro';
import Project from './Project';
import Services from './Services';
import Howwework from './Howwework';
import Customer from './Customer';

function Home({ scrollTo }) {
  useEffect(() => {
    if (!scrollTo) return;
    const element = document.getElementById(scrollTo);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    element.classList.add('section-highlight');
    const timer = setTimeout(() => {
      element.classList.remove('section-highlight');
    }, 1200);
    return () => clearTimeout(timer);
  }, [scrollTo]);

  return (
    <>
      <section id="home" className="section">
        <Intro />
      </section>

      <section id="project" className="section">
        <Project />
      </section>

      <section id="services" className="section">
        <Services />
      </section>

      <section id="howwework" className="section">
        <Howwework />
      </section>

      <section id="customer" className="section">
        <Customer />
      </section>
    </>
  );
}

export default Home;