import { mount } from '@cypress/react18';
// import AboutUs from '../../src/pages/about-us/about-us';
import React from 'react';

describe('AboutUs', () => {
  it('mounts', () => {
    mount(<h1>Какая-то страница</h1>);
  });
});
