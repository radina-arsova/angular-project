import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  get isReady(): boolean{
    return this.userService.currentUser !== undefined;
  }

  constructor(private userService: UserService){}
}
