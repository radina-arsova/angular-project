import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get isLoged(){
    return this.userService.isLoged;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
