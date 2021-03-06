import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {

  constructor(private http: HttpClient) {
  }

  //Get fetch

  getNews() {
    return this.http.get('https://api.mediehuset.net/overlook/news');
  }
  getRoom(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/rooms/${id}`);
  }
  getCountrys() {
    return this.http.get(`https://api.mediehuset.net/overlook/countries`);
  }
  getCitys(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/cities/by_country/${id}`);
  }
  getHotels(id: number) {
    return this.http.get(`https://api.mediehuset.net/overlook/hotels/${id}`);
  }

  //Put fetch direct api



}

