import { Component, OnInit, Input } from '@angular/core';


import { MyCourseServiceService } from '../my-course-service.service';
import {Courses} from '../data';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-my-gis-component',
  templateUrl: './my-gis-component.component.html',
  styleUrls: ['./my-gis-component.component.css'],
  providers: [ MyCourseServiceService ]
})
export class MyGisComponentComponent implements OnInit {
  errorMessage: string;

closeResult: string;
  mydata: any; 
  heroes: Courses[] = [];
  myname: string[];
  mode = 'Observable';
  myObj: any;
   myRec: any;
   counter:any;
            
             newReg() { alert('hi') };
  constructor(private CourseService: MyCourseServiceService, private modalService: NgbModal) { 
    this.myObj = [{
      name: 'Juri',
      website: 'http://juristr.com',
      twitter: '@juristr'
    }];
    this.myRec = {};
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

 

   open(content) {
    this.modalService.open(content).result.then((result) => {
      this.mydata[this.counter] =    Object.assign({}, this.myRec);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  editRec(i) {
    console.log(i);
    this.counter = i;
    this.myRec =    Object.assign({}, this.mydata[i]); //deep copy
    console.log(this.myRec);
    
  };
  
  

}
