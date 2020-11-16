import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SpaceXList from '../../components/SpaceXList/SpaceXList';
import SpaceXFilters from '../../components/SpaceXFilters/SpaceXFilters';
import Spinner from '../../components/View/Spinner/Spinner'

configure({ adapter: new Adapter() });

let wrapper

describe('<Dashboard/>', () => {
    beforeEach(() => {
        wrapper = shallow(<Dashboard fetchLaunchData={() => { }} query={{}} launchProgram={{ loading: true }} />);
    })
    it('should render <SpaceXList/> when receiving launchData', () => {
        wrapper.setProps({ launchProgram: { success: true, launchData:[{},{}] } })
        expect(wrapper.containsMatchingElement(<SpaceXList launchData={[{},{}]}/>)).toEqual(true);
    })
    it('should render an error message in case of error', () => {
        wrapper.setProps({ launchProgram: { error: true } })
        expect(wrapper.containsMatchingElement(<div className="no-data"><h2>Error occurred while fetching data</h2></div>)).toEqual(true);
    })
    it('should render <Spinner/> when loading', () => {
        wrapper.setProps({ launchProgram: { loading: true } })
        expect(wrapper.containsMatchingElement(<Spinner/>)).toEqual(true);
    })
    it('should render <SpaceXFilters/>', () => {
        expect(wrapper.containsMatchingElement(<SpaceXFilters/>)).toEqual(true);
    })
})
