import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  registrationHandler({username, password, imageUrl, balance}: {username: string, password: string, imageUrl: string, balance: number}) {
    this.userService.register(username, password, imageUrl, balance).subscribe(() => {
      this.router.navigate(['/user/login']);
    }, console.error);
  }

  seePassword(passwordInput: any){
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
  }
}
