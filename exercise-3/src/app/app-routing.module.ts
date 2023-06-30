import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { routeGuard } from './route-guard.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'client/dashboard', component: DashboardComponent},
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/heroes', component: HeroesComponent, canActivate: [routeGuard]},
  { path: 'admin', component: AdminComponent, data: { role: 'admin'}},
  {path: 'client', component: ClientComponent, data: { role: 'user'}},
  { path: 'client/dashboard/detail/:id', component: HeroDetailComponent },
  { path: 'admin/dashboard/detail/:id', component: HeroDetailComponent },
  {path: 'access-denied', component: AccessDeniedComponent},
  { path: '**', redirectTo: '/access-denied' }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
