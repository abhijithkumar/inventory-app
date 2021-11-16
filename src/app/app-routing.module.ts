import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'test-page', component: TestPageComponent, data: { text: 'test page' } },
  { path: 'list', component: ListComponent, data: { text: 'list' } },
  { path: 'create', component: CreateComponent, data: { text: 'create' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
