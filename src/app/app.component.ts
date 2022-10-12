import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularExercise';
  value:string=""
  /**
   *
   */
  buttonDisable = true
  constructor() {
    setTimeout(()=>
    {
      this.buttonDisable = false
    },2000)
    
    
}
buttonDisabled()
    {
      this.buttonDisable = true
    }
    getValue()
    {
        console.log(this.value)
    }
  }
