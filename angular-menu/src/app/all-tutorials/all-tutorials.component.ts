import { Component, OnInit } from '@angular/core';
import {Tutorial} from '../tutorial';
import {TutorialService} from '../tutorial.service'

@Component({
  selector: 'app-all-tutorials',
  templateUrl: './all-tutorials.component.html',
  styleUrls: ['./all-tutorials.component.css']
})
export class AllTutorialsComponent implements OnInit {


  tutorials: Tutorial[] = [];

  constructor(private tutorialServices: TutorialService) { }

  ngOnInit(): void {
    this.tutorialServices.getTutorials()
      .then(tutorials => this.tutorials = tutorials.slice(0, 1000));
  }

      left: boolean = false;
      
      isActive:true;
}
