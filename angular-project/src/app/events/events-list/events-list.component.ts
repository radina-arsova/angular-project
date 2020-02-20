import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service'
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  get isLoged(){
    return this.userService.isLoged;
  }

  get events() {
    this.eventsService.events.map(event => {
      if (event.author !== this.userService.currentUser._id)
      event.author = undefined;
      event.description = event.description.split(' ').slice(0, 30).join(' ') + '..';
    })
    return this.eventsService.events;
  }

  constructor(
    private eventsService: EventsService,
    private userService: UserService) { }

  ngOnInit() {
    this.eventsService.load();
  }
}
