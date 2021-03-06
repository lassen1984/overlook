import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { SliderComponent } from './tools/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './pages/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    FrontpageComponent,
    HotelsComponent,
    RoomsComponent,
    ReservationsComponent,
    LoginComponent,
    AboutComponent,
    SliderComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
