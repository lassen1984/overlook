import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  search = this.fb.group({
  search:['',Validators.required]
  })

  ngOnInit(): void {

  }

submit(){

const keyword = this.search.get("search").value;

location.href = `/search/${keyword}`;

}

}
