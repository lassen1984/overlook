import { Component, OnInit } from '@angular/core';
import { FetchserviceService } from 'src/app/services/fetchservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

searchResult: any

  constructor(private http: FetchserviceService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
// console.log(this.route.snapshot.params.keyword);

const keyword = this.route.snapshot.params.keyword.split(' ').join('%20');
console.log(keyword);

this.searchResult = await this.http.getSearchResults(keyword).toPromise();
this.searchResult = this.searchResult.items
console.log(this.searchResult);

  }

}
