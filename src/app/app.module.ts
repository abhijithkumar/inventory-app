import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { IgxInputGroupModule, IgxSelectModule, IgxButtonModule, IgxGridModule, IgxActionStripModule, IgxIconModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { FetchComponent } from './fetch/fetch.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    ChildViewComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxButtonModule,
    FormsModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
