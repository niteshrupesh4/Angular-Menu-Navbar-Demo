import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ButtonComponent } from '../components/button/button.component';
import { InvoiceComponent } from '../components/invoice/invoice.component';
import { CardsComponent } from '../components/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {path: 'button', component: ButtonComponent},
      {path: 'invoice', component: InvoiceComponent},
      {path: 'card', component: CardsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
