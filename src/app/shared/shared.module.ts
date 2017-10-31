import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponent } from './shared.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		SharedComponent
	],
	exports: [
		FormsModule,
		ReactiveFormsModule
	]
})

export class SharedModule { }