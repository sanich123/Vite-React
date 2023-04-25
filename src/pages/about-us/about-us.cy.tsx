import { mount } from '@cypress/react18';
import AboutUs from './about-us';
import { BrowserRouter } from 'react-router-dom';

describe('AboutUs', () => {
  it('correctly renders', () => {
    mount(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    ['main', 'forms', 'about us'].map((link) => cy.get('a').contains(new RegExp(`${link}`, 'i')));
    cy.get('h1').contains(/Страница про нас/i);
  });
});
