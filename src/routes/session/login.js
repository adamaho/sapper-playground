import { post } from '../../utils';

export function login(req, res) {
	const user = req.body;

	api.post('users/login', { user }).then(response => {
		if (response.user) req.session.user = response.user;
		res.setHeader('Content-Type', 'application/json');

		res.end(JSON.stringify(response));
	});
}