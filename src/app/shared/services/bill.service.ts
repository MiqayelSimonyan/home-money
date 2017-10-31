import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Bill } from '../models/bill.model';
import { BaseApi } from '../core/based-api';

@Injectable()
export class BillService extends BaseApi {
	constructor(public http: Http) {
		super(http);
	}

	public getBill(): Observable<Bill> {
		return this.get('bill');
	}

	public getCurrency(base: string = 'RUB'): Observable<any> {
		return this.http.get(`http://api.fixer.io/latest?base=${base}`)
			.map((response: Response) => response.json())
	}
}