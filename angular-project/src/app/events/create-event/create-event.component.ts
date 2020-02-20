import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(
    private eventService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createEventHandler(event){
    this.eventService.create(event).subscribe(() =>{
      this.router.navigate(['event'])
    })
  }

}
