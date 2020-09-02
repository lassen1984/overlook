import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

@ViewChild('banner') banner;

cookiecheck = this.cookie.get('cookiepolicy')

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {console.log(this.cookiecheck);
   }


acceptCookies(){

this.cookie.set('cookiepolicy',1);

this.banner.nativeElement.classList.add('hide_cookiebanner');


}

}
