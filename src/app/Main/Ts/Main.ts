import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../Html/Main.html',
  styleUrls: ['../Css/Main.css']
})
export class MainComponent {

function(n:number):boolean{
  if(n>1){
    return true;
  }
 return false;
}

}
