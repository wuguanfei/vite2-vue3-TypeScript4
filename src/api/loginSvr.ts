import request from '@/utils/request';

export class loginSvr {
	baseurl: string;
	constructor() {
		this.baseurl = '/login';
	}
	login(username: string, password: string) {
		return request.post(this.baseurl + '', { username, password });
	}
}