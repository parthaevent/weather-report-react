import React from 'react';
import {render} from 'enzyme';
import ReportListItem from './ReportListItem';

describe('ReportListItem', () => {
  it('should render the `value` in <li>', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('li')).to.contain.text();
  });

function renderComponent(props = {
  name: 'London',
  main: {
    humidity: 100,
    pressure: 60,
    temp: 120,
    temp_max: 200,
    temp_min: 150,
  }}) {
  return render(<ReportListItem {...props} />);
}
