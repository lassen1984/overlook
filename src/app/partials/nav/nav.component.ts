import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

isLoggedIn = false;



  constructor(private cookie:CookieService) { }

  ngOnInit(): void {

    console.log(this.cookie.get('token'));
    if (this.cookie.get('token')) {
      this.isLoggedIn = true

    }
    else{
      this.isLoggedIn = false;
    }

  }

  logout(){
this.isLoggedIn = false;
this.cookie.delete('token');
this.cookie.delete('userid');

  }

}
