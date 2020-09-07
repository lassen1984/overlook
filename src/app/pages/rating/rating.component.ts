import { Component } from '@angular/core';
import{ HttpHeaders} from '@angular/common/http'
import { CookieService } from 'src/app/services/cookie.service';
import { FetchserviceService } from 'src/app/services/fetchservice.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
	title = 'Angular Star Rating';

	arr: any[] = [];
	index:number = -1;

	constructor(private cookie:CookieService, private http:FetchserviceService) {
		this.arr = [1, 2, 3, 4, 5];
	}

	async onClickItem(index) {
		console.log(index);
    this.index = index;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookie.get('token')}` );

    let data = {
      'hotel_id': '1',
      'num_stars': index.toString(),
      'comment': ''
    };

    const res = await this.http.postRating(data, { headers }).toPromise();

  console.log(res);


  }



}

