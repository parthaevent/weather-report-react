import React from 'react';
import {render} from 'enzyme';
import Report from './Report';

describe('Report', () => {
  it('should render the `value` in <ul>', () => {
    const wrapper = renderComponent();
    expect(wrapper.find('ul')).to.contain.text(value);
  });

function renderComponent(props = {place_name: 'London'}) {
  return render(<Report {...props} />);
}
