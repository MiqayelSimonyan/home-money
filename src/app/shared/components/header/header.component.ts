import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public date: Date = new Date();
	public username: string;

  	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
		this.username = this.authService.getToken('user');
  	}

  	public onLogout() {
  		console.log('logout');
  		this.authService.logout();
  		this.router.navigate(['/login']);
  	}

}
