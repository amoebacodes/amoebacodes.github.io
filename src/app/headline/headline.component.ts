import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
})
export class HeadlineComponent implements OnInit {
  summary: string = '';
  aboutMe: string = '';
  constructor(public http: HttpClient) {}
  faDownload = faDownload;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  ngOnInit(): void {
    this.http.get('assets/text/summary.txt',{ responseType: 'text' }).subscribe((data:string) => {if (data) {this.summary = data}});
    this.http.get('assets/text/aboutMe.txt',{ responseType: 'text' }).subscribe((data:string) => {if (data) {this.aboutMe = data}});
  }
}
