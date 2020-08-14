import { Component, OnInit } from '@angular/core';
import { FetchserviceService } from 'src/app/services/fetchservice.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  news: any
  rooms: any;
  constructor(private http: FetchserviceService) { }

  async ngOnInit(): Promise<void> {

    this.news = await this.http.getNews().toPromise();
    this.news = this.news.items;
    this.rooms = [await this.http.getRoom(2).toPromise(), await this.http.getRoom(3).toPromise(), await this.http.getRoom(4).toPromise()];
    this.rooms = [this.rooms[0].item, this.rooms[1].item, this.rooms[2].item];
    console.log(this.rooms);


  }
}