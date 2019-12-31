import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo-app';
  homeClicked = true

  setHomeClicked(param){
    if(param==1)
    this.homeClicked = true;
    else
    this.homeClicked = false
  }
}
