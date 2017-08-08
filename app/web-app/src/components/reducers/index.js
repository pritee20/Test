import { combineReducers } from 'redux';
import Savings from './savings';
import GetData from './getDataReducer';


const allReducers =  combineReducers({
	savings: Savings,
	getData: GetData
});

export default allReducers;