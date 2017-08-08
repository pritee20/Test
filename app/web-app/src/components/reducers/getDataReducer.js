import {ALL_DATA} from '../actions/getData';

export default function(state=[],action){
	console.log('Action recived', action);
	switch (action.type){
		case 'ALL_DATA' : 
			return action.payload.data;

	}
	return state;
}