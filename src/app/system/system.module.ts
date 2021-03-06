import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system.routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlaningPageComponent } from './planing-page/planing-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SystemComponent } from './system.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { DropdownDirective } from '../shared/directives/dropdown.directive';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { BillService } from '../shared/services/bill.service';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { MomentPipe } from '../shared/pipes/moment.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
  	SystemComponent,
  	BillPageComponent,
  	HistoryPageComponent,
  	PlaningPageComponent,
  	RecordsPageComponent,
  	HeaderComponent,
  	SidebarComponent,
  	DropdownDirective,
  	BillCardComponent,
  	CurrencyCardComponent,
    MomentPipe
  ],
  providers: [BillService]
})
export class SystemModule { }
