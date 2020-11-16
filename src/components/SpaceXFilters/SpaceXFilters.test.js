import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SpaceXFilters from './SpaceXFilters'
import FilterCategory from './FilterCategory/FilterCategory';

configure({ adapter: new Adapter() });

const filterData = new Array(5).fill({type:"test"});

describe('<SpaceXFilters/>', () => {
    it(`should render ${filterData.length} <FilterCategory/> elements`, () => {
        const wrapper = shallow(<SpaceXFilters filterData={filterData} />);
        expect(wrapper.find(FilterCategory)).toHaveLength(filterData.length);
    })
})
