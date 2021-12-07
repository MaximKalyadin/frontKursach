import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ResultComponent } from './components/result/result.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ScrollingModule,
    LayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ResultComponent,
    FullLayoutComponent,

  ],
  providers: [

  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
