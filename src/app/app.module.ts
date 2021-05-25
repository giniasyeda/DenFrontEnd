import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field'
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BannerComponent } from './components/banner/banner.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './components/review/review.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HicksvilleComponent } from './components/hicksville/hicksville.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppointmentComponent,
    BannerComponent,
    RegisterComponent,
    LoginComponent,
    ReviewComponent,
    FooterComponent,
    HomeComponent,
    HicksvilleComponent,
   
  
    
    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    MatButtonModule,
    MatMenuModule,
    MDBBootstrapModule,
    MatFormFieldModule,FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
