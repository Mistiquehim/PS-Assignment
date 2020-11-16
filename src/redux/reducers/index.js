import dashboardReducer from './dashboardReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    launchProgram: dashboardReducer
}) 