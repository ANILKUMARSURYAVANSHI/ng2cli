import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyWelcomeComponentComponent } from './my-welcome-component/my-welcome-component.component';
import { MyGisComponentComponent } from './my-gis-component/my-gis-component.component';

const appRoutes: Routes = [
  { path: 'main', component: MyWelcomeComponentComponent },
  { path: 'myjs',      component: MyGisComponentComponent },

  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: MyWelcomeComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyWelcomeComponentComponent,
    MyGisComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
