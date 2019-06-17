import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as _d3 from "d3";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { D3DisplayComponent } from './d3-display/d3-display.component';

declare global {
  const d3: typeof _d3;
}

@NgModule({
  declarations: [
    AppComponent,
    D3DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
