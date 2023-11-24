import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MoviesComponent } from './admin/dashboard/movies/movies.component';
import { OrdersComponent } from './admin/dashboard/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'movies',
        component:MoviesComponent
      },
      {
        path:'orders',
        component:OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
