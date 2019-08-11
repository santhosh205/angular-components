import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DragNDropModule } from './modules/drag-n-drop/drag-n-drop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DragNDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
