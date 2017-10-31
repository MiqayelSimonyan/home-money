import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[Dropdown]'
})

export class DropdownDirective {
	@HostBinding('class.open') public isOpen: boolean = false;

	@HostListener('click') onClick() {
		this.isOpen = !this.isOpen;
	}
}