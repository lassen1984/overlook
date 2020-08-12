import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { AboutComponent } from './pages/about/about.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { RoomsComponent } from './pages/rooms/rooms.component';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'rooms', component: RoomsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
