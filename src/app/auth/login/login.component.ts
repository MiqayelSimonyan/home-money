import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../shared/services/users.service';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private notValidColor: string = 'red';
  private submitted: boolean = false;
  public message: Message;

  constructor(
  		private fb: FormBuilder, 
  		private userService: UserService,
  		private authService: AuthService,
  		private router: Router,
      private route: ActivatedRoute
  	) { }

  ngOnInit() {
    this.message = new Message('', 'danger');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) return this.showMessage('now you can login', 'success');
        if (params['accessDenied']) return this.showMessage('For working with the system you should be loggin', 'warning');
      });

  	this.loginForm = this.fb.group({
  		'email': ['', [Validators.required, Validators.email]],
  		'password': ['', [Validators.required, Validators.minLength(6)]]
  	});

  	/*this.loginForm = new FormGroup({
  		'email': new FormControl(null, [Validators.required, Validators.email]),
  		'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
  	});*/
  }

  private showMessage(text: string, type: string = 'danger') {
  	this.message = new Message(text, type);
  	setTimeout(() => {
  		this.message = {text: '', type: ''};
  	}, 5000)
  }

  public onSubmit() {
  	const loginFormData = this.loginForm.value;
  	this.submitted = true;

  	if (this.loginForm.valid) {
	  	this.userService.getUserByEmail(loginFormData.email)
	  		.subscribe((user: User) => {
	  			if (!user) return this.showMessage('User not defined');
          if (user.password != loginFormData.password) return this.showMessage('Password wrong');

	  			this.message.text = '';
	  			localStorage.setItem('user', user.name);
	  			this.authService.login();
	  			this.router.navigate(['/system', 'bill']);
	  		})
  	}
  }

}
