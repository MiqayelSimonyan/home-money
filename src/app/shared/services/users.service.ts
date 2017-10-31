import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';
import { BaseApi } from '../core/based-api';

@Injectable()
export class UserService extends BaseApi {
	constructor(public http: Http) {
		super(http);
	}

	public getUserByEmail(email: string): Observable<User> {
		return this.get(`users?email=${email}`)
			.map((user: User[]) => user.length ? user[0] : undefined);
	}

	public createNewUser(user: User): Observable<User>  {
		return this.post('users', user);
	}
}