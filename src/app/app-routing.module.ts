import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { FetchComponent } from './fetch/fetch.component';

export const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'create', component: CreateComponent, data: { text: 'create' } },
  { path: 'list', component: ListComponent, data: { text: 'list' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: 'fetch', component: FetchComponent, data: { text: 'fetch' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
