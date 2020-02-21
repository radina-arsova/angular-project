import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  get user() {
    console.log(this.userService.currentUser)
    return this.userService.currentUser;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  editHandler(data) {
      console.log(data)
      if(!data.username)
      data.username=this.user['username'];
      if(!data.password)
      data.password='';
      this.userService.edit(data.username, data.password).subscribe(() => {
        this.router.navigate(['/user/profile'])
      });
  }

  seePassword(passwordInput: any){
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
  }

}
