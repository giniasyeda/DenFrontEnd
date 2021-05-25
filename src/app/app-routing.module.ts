import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BannerComponent } from './components/banner/banner.component';



import { HeaderComponent } from './components/header/header.component';
// import { HicksvilleComponent } from './components/hicksville/hicksville.component';

import { HomeComponent } from './components/home/home.component';

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
    path:"appointment", 
    component: AppointmentComponent, 
    pathMatch: 'full'
},
{
  path: "review",
  component: ReviewComponent,
  pathMatch: 'full'

},

// {
//   path: "hicksville",
//   component: HicksvilleComponent,
//   pathMatch:'full'
// },

// {
//   path: "queens",
//   component: QueensComponent,
//   pathMatch: 'full'
// },

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
