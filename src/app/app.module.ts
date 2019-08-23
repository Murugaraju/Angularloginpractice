import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { HttpClientModule } from '@angular/common/http';
// import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    // MatCardModule
    HttpClientModule,
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
