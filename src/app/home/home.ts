import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
// count = 0;

// increase() {
//   this.count++;
// }
color = 0;
handleclick(val:number)
{
  this.color = val;
}

display = true;

  hide() {
    this.display = false;
  }

  show() {
    this.display = true;
  }




}
