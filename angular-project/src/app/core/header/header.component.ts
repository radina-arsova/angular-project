import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLoged(){
    return this.userService.isLoged;
  }

  createCauseButton: boolean = false;
  createEventButton: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    if(this.router.url=='/cause' && this.userService.isLoged)
    this.createCauseButton=true;
    if(this.router.url=='/event' && this.userService.isLoged)
    this.createEventButton=true;
  }

  logout(){
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
