import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapoperatorComponent } from './mapoperator/mapoperator.component';
import { FirstObsComponent } from './first-obs/first-obs.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { JoinforkComponent } from './joinfork/joinfork.component';

@NgModule({
  declarations: [
    AppComponent,
    MapoperatorComponent,
    FirstObsComponent,
    PostComponent,
    JoinforkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
