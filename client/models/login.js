import axios from 'axios';

export const userLogin = function(url, username, password) {
	return axios({
		method: 'post',
		url: url,
		data: {
			username: username,
			password: password
		}
	});
};