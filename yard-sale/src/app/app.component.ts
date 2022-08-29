import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yard-sale';

  onLoaded(img:string){
    console.log('loaded parent');
  }
}
