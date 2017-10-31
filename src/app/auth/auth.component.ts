import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public redirectUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {
  	this.router.navigate(['/login']);
  }

}
