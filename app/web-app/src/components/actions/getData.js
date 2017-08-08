import axios from 'axios';
import {API_END} from '../api/index';
const endPointAPI = API_END+'/comments?postId=1';

export const ALL_DATA = 'ALL_DATA';

export function getDataAll(postId){
	const url = `${endPointAPI}&q=${postId}`;
	const getReaquest = axios.get(url);
	console.log('Request', getReaquest);
	return {
		type: ALL_DATA,
		payload: getReaquest
	}
}
