import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import '@ui-guys/stencil-bs-ui-lib';
import { UiLibraryComponent } from './ui-library/ui-library.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'ui-library', component: UiLibraryComponent },
  { path: 'example-form', component: ExampleFormComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UiLibraryComponent,
    ExampleFormComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
