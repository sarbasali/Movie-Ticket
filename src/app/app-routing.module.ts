import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { SeatBookingComponent } from './components/seat-booking/seat-booking.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
const routes: Routes = [
  {path:'',
redirectTo:'/login',
pathMatch:'full'
},
  {path:"login" , component:LoginComponent},
  {path:"home" , component:HomeComponent},
  {path:"details" , component:MovieDetailsComponent},
  {path:"seat",component:SeatBookingComponent},
  {path:'payment' , component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
