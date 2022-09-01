import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
})
export class HeadlineComponent implements OnInit {
  summary: string = '';
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/text/summary.txt',{ responseType: 'text' }).subscribe((data:any) => {if (data) {this.summary = data}});
  }
}
