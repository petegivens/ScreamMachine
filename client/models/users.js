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

export const addUser = function(url, username, password, firstname, lastname) {
	return axios({
		method: 'post',
		url: url,
		data: {
			username: username,
			password: password,
			first_name: firstname,
			last_name: lastname
		}
	});
};