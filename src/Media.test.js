import React from "react";
import renderer from 'react-test-renderer';
import Media from './Media';

it('renders correctly', () => {
  const tree = renderer
    .create(<Media url="https://apod.nasa.gov/apod/image/2002/SouthernMoonscapeClaviusTycho1024.jpg" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
