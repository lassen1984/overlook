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

reverseSearch = true;
reverseId = true;

  constructor(private http: FetchserviceService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
// console.log(this.route.snapshot.params.keyword);

const keyword = this.route.snapshot.params.keyword.split(' ').join('%20');
console.log(keyword);

this.searchResult = await this.http.getSearchResults(keyword).toPromise();
this.searchResult = this.searchResult.items
console.log(this.searchResult);
}

sortByNumber() {
  if (this.reverseId) {
    this.searchResult.sort((a,b) => a.id - b.id);
  } else {
    this.searchResult.sort((a,b) => b.id - a.id);
  }
  this.reverseId = this.reverseId ? false : true
}

sortByName(){
  if(this.reverseSearch){
    this.searchResult.sort((a,b) => {
    console.log(a.title);

    if(b.title > a.title) return -1;

    if(a.title > b.title) return 1;
    return 0;
  });

  }else{
    this.searchResult.sort((a,b) => {
      console.log(a.title);

      if(b.title > a.title) return 1;

      if(a.title > b.title) return -1;

      return 0;
    });
  }
  this.reverseSearch = this.reverseSearch ? false : true
  }
}
