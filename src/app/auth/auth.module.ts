import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		AuthRoutingModule
	],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegistrationComponent,
	]
})

export class AuthModule { }