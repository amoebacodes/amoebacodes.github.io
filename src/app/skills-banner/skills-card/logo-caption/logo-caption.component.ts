import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-logo-caption',
  templateUrl: './logo-caption.component.html',
  styleUrls: ['./logo-caption.component.css']
})
export class LogoCaptionComponent implements OnInit {
  @Input() imageDir: string = '';
  @Input() caption: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
