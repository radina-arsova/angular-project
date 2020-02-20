import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { CausesService } from 'src/app/shared/services/causes.service';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get user() {
    return this.userService.currentUser;
  }

  get myCauses() {
    return this.causesService.causes;
  }

  get myEvents() {
    return this.eventsService.events;
  }

  addInput: boolean = false;
  buttonText: string = 'Add money in your bank balance';

  constructor(
    private userService: UserService,
    private causesService: CausesService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.causesService.loadUsersCauses();
    this.eventsService.loadUsersEvents();
  }

  deleteProfile() {
  }

  addMoneyInput() {
    this.addInput = !this.addInput
    if (!this.addInput)
      this.buttonText = 'Add money in your bank balance';
    else
      this.buttonText = 'Cancel';
    return this.addInput;
  }

  addMoney(data) {
    const balance: number = Number(data.money) + Number(this.userService.currentUser.balance);
    this.userService.addMoney(balance).subscribe(() => {
      this.addInput = false;
      this.buttonText = 'Add money in your bank balance';
    });
  }

}
