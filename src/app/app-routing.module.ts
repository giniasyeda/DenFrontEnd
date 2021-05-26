import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrooklynComponent } from './components/brooklyn/brooklyn.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';



import { HeaderComponent } from './components/header/header.component';
import { HicksvilleComponent } from './components/hicksville/hicksville.component';

import { HomeComponent } from './components/home/home.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { CosmeticdentistyComponent } from './components/ourservices/cosmeticdentisty/cosmeticdentisty.component';
import { GeneraldentistyComponent } from './components/ourservices/generaldentisty/generaldentisty.component';
import { OralsurgeryComponent } from './components/ourservices/oralsurgery/oralsurgery.component';
import { OrthodonticsdentistyComponent } from './components/ourservices/orthodonticsdentisty/orthodonticsdentisty.component';
import { ProsthodonticsdentistyComponent } from './components/ourservices/prosthodonticsdentisty/prosthodonticsdentisty.component';
import { QueensComponent } from './components/queens/queens.component';


import { RegisterComponent } from './components/register/register.component';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },

  {
    path:"cosmeticdentisty",
    component: CosmeticdentistyComponent,
    pathMatch:'full'
  },

  {
    path: "generaldentisty",
    component: GeneraldentistyComponent,
    pathMatch: 'full'
  },

  {
    path: "oralsurgery",
    component: OralsurgeryComponent,
    pathMatch: 'full'
  },

  {
    path: "orthodonticsdentisty",
    component: OrthodonticsdentistyComponent,
    pathMatch: 'full'

  },

  {
    path: "make-payment",
    component: MakePaymentComponent,
    pathMatch: 'full'
  },

  {
    path: "contact-us",
    component: ContactUsComponent,
    pathMatch: 'full'
  },

  {
    path: "prosthodonticsdentisty",
    component: ProsthodonticsdentistyComponent,
    pathMatch: 'full'
  },



  {
    path:"appointment", 
    component: AppointmentComponent, 
    pathMatch: 'full'
},
{
  path: "review",
  component: ReviewComponent,
  pathMatch: 'full'

},

{
  path: "hicksville",
  component: HicksvilleComponent,
  pathMatch:'full'
},

{
  path: "aboutus",
  component: AboutusComponent,
  pathMatch: 'full'
},

{
  path: "queens",
  component: QueensComponent,
  pathMatch: 'full'
},

{
  path: "brooklyn",
  component: BrooklynComponent,
  pathMatch: 'full'
},

// {
//   path: "hicksville",
//   component: HicksvilleComponent,
//   pathMatch: 'full'
// },

// {
//   path:"calendar",
//   component: CalendarComponent,
//   pathMatch:'full'
// },



  
  {
    path:"login", 
    component: LoginComponent
  },
  //   {
  //     path:"reserve", 
  //     component: ReserveComponent, 
  //     pathMatch: 'full'
  // },
   
    

     { path:"home", 
      component:HomeComponent,
      pathMatch:"full"}, 

  //     { path:"menu", 
  //     component:MenuComponent,
  //     pathMatch:"full"},

  //     { path:"home/menu", 
  //     component:MenuComponent,
  //     pathMatch:"full"}, 

  //     { path:"instant", 
  //     component:InstantFoodComponent,
  //     pathMatch:"full"}, 

      { path:"login/register", 
      component:RegisterComponent,
      pathMatch:"full"}, 
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
