import React from "react";
import renderer from 'react-test-renderer';
import DatePicker from './DatePicker';

it('renders correctly', () => {
  const tree = renderer
    .create(<DatePicker date="02-06-202" changeDate={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
