import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = undefined;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginHandler({username, password}: {username: string, password: string}) {
    this.userService.login(username, password).subscribe(() => {
      this.router.navigate(['']);
    }, (error) => {
      this.error=error.error;
    });
  }

  seePassword(passwordInput: any){
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
  }

}
