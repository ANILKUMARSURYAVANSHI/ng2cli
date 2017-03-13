import { Component, OnInit } from '@angular/core';

import { MyCourseServiceService } from '../my-course-service.service';
import {Courses} from '../data';


@Component({
  selector: 'app-my-gis-component',
  templateUrl: './my-gis-component.component.html',
  styleUrls: ['./my-gis-component.component.css'],
  providers: [ MyCourseServiceService ]
})
export class MyGisComponentComponent implements OnInit {
  errorMessage: string;
  mydata: any; 
  heroes: Courses[] = [];
  myname: string[];
  mode = 'Observable';
  myObj: any;
    mgmtTypeList = ['Government', 'Govt Aided',
            'Govt. Unaided', 'Private'];
            model= { instname : ""};
             newReg() { alert('hi'+ this.model.instname) };
  constructor(private CourseService: MyCourseServiceService) { 
    this.myObj = [{
      name: 'Juri',
      website: 'http://juristr.com',
      twitter: '@juristr'
    }];
       this.mydata = [
  
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }

];
    
  }

  ngOnInit() {
    this.getCourse();
  }
   getCourse() {
    this.CourseService.getCourses()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);             
  }

  
  

}
