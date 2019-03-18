import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			console.log(id)
			console.log(result)
			result.map((item)=>{
				if(item.id==id){
				dispatch(changeDetail(item.title, item.content))
				}
			})
		}).catch(() => {	
		})
	}
};