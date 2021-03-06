import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Courses} from './data';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class MyCourseServiceService {
  private mytype : string;
  private gisUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private gisUrlAdd = 'https://jsonplaceholder.typicode.com/posts/'; 
  private gisUrlUpdate = 'https://jsonplaceholder.typicode.com/posts/';
  private gisUrlDelete = 'https://jsonplaceholder.typicode.com/posts/'; // URL to web API
  constructor (private http: Http) {}
  getCourses (): Observable<Courses[]> {
    return this.http.get(this.gisUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addCourse (name: string): Observable<Courses> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.gisUrl + this.gisUrlAdd, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  updateCourse (name: string): Observable<Courses> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.gisUrl + this.gisUrlUpdate, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    //body.data
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

 

}
