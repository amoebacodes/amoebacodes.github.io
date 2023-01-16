import { Component, OnInit } from '@angular/core'; 
import { ISkillsCard, ISkillsLogo } from '../../interfaces'
import { Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css'],
  animations:[
      trigger('cardFlip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('500ms')
        ]),
        transition('flipped => default', [
          animate('500ms')
        ])
      ])
    ]
})

export class SkillsCardComponent implements OnInit {
  @Input() skillCategory: string = '';
  mycard: ISkillsCard = {skillsCategory: this.skillCategory, state: 'default'}; 

  imageSets: ISkillsLogo[] = [];

  faCoffee = faCoffee;

  constructor() {
    
  }

  ngOnInit(): void {
    if (this.skillCategory == 'Programming') {
      this.imageSets = [
        {imageDir: '../../../assets/img/python.png', caption: 'Python'},
        {imageDir: '../../../assets/img/java.png', caption: 'Java'},
        {imageDir: '../../../assets/img/r.png', caption: 'R'},
        {imageDir: '../../../assets/img/matlab.png', caption: 'MATLAB'},
        {imageDir: '../../../assets/img/javascript.png', caption: 'JavaScript'},
        {imageDir: '../../../assets/img/css.png', caption: 'CSS'},
        {imageDir: '../../../assets/img/html.png', caption: 'HTML'},
        {imageDir: '../../../assets/img/angular.png', caption: 'AngularJS'},
        {imageDir: '../../../assets/img/git.png', caption: 'Git'},
        {imageDir: '../../../assets/img/django.png', caption: 'Django\nREST\nFramework'},
        {imageDir: '../../../assets/img/mysql.png', caption: 'MySQL'},
        
    ];
    } else if (this.skillCategory == 'AI & ML') {
      this.imageSets = [
        {imageDir: '../../../assets/img/aws.png', caption: 'AWS'},
        {imageDir: '../../../assets/img/tensorflow.png', caption: 'TensorFlow'},
        {imageDir: '../../../assets/img/pytorch.png', caption: 'PyTorch'},
        {imageDir: '../../../assets/img/opencv.png', caption: 'OpenCV'},
        {imageDir: '../../../assets/img/sklearn.svg', caption: 'Scikit-learn'},
        {imageDir: '../../../assets/img/pyspark.svg', caption: 'PySpark'},
      ]
    }
  }

  flip(): void{
    if (this.mycard.state == 'default') {
      this.mycard.state = 'flipped';
    } else {
      this.mycard.state = 'default';
    }
  }
  flipToHide(): void{
    if (this.mycard.state == 'flipped') {
      this.mycard.state = 'default';
    }
  }

}
