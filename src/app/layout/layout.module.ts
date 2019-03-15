import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ButtonComponent } from '../components/button/button.component';
import { InvoiceComponent } from '../components/invoice/invoice.component';
import { CardsComponent } from '../components/cards/cards.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    LayoutComponent,
    DashboardComponent,
    ButtonComponent,
    InvoiceComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
    FlexLayoutModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutModule { }
