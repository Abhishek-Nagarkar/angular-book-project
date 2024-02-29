import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpringAngularModule } from './spring-angular/spring-angular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpringAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
