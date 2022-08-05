import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Input Parent to Child
  userLoggedIn = true;
  puttingName = 'Ana';
  makingList: string[] = ['Lime', 'Oranges', 'Bananas', 'Apples'];
  isAvailable = true;
}
