import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppdetailsComponent } from './components/appdetails/appdetails.component';
import { FilterComponent } from './components/filter/filter.component';
import { UserfilterComponent } from './components/userfilter/userfilter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  { path: 'genfilter', component: FilterComponent },
  { path: 'userfilter', component: UserfilterComponent },
  { path: 'app', component: AppdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
