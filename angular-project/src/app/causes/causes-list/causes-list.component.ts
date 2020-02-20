import { Component, OnInit } from '@angular/core';
import { CausesService } from 'src/app/shared/services/causes.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-causes-list',
  templateUrl: './causes-list.component.html',
  styleUrls: ['./causes-list.component.css']
})
export class CausesListComponent implements OnInit {

  get isLoged() {
    return this.userService.isLoged;
  }

  get causes() {
    this.causesService.causes.map(cause => {
      if (cause.author !== this.userService.currentUser._id)
        cause.author = undefined;
      cause.description = cause.description.split(' ').slice(0, 30).join(' ') + '..';
    })
    return this.causesService.causes;
  }

  constructor(
    private causesService: CausesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.causesService.load();
  }


}
