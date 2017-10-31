import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	public registrationForm: FormGroup;
	public submitted: boolean = false;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private userService: UserService		
	) { }

	ngOnInit() {
		this.registrationForm = this.fb.group({
			'email': ['', [Validators.required, Validators.email], this.forbiddenEmail.bind(this)],
			'password': ['', [Validators.required, Validators.minLength(6)]],
			'name': ['', Validators.required],
			'agree': ['', Validators.requiredTrue]
		});
	
		/*this.registrationForm = new FormGroup({
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
			'name': new FormControl(null, [Validators.required])
		});*/
	}

	public forbiddenEmail(control: FormControl): Promise<any> {
		return new Promise((resolve, reject) => {
			this.userService.getUserByEmail(control.value)
				.subscribe((user: User) => {
					user ? resolve({forbiddenEmail: true}) : null
				});
		});
	}

	public onSubmit() {
		this.submitted = true;
		const {email, password, name} = this.registrationForm.value;
		const user = new User(email, password, name);

		this.userService.createNewUser(user)
			.subscribe((user: User) => {
				console.log('user', user);
				this.router.navigate(['/login'], {
					queryParams: {
						nowCanLogin: true
					}
				});
			})
	}

}
