import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  get event() {
    return this.eventsService.events;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.eventsService.load(this.activatedRoute.snapshot.params.id);
    if(!this.event)
    this.router.navigate(['/404'])
  }

}
