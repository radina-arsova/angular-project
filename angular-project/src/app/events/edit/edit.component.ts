import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  get event() {
    return this.eventsService.events;
  }

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.eventsService.load(this.router.url.split('/')[3]);
    if (!this.event)
      this.router.navigate(['/404'])
  }

  editEventHandler(data){
    console.log(data)
    if(!data.title)
    data.title=this.event['title'];
    if(!data.description)
    data.description=this.event['description'];
    if(!data.imageUrl)
    data.imageUrl=this.event['imageUrl'];
    this.eventsService.edit(this.router.url.split('/')[3], data.title, data.description, data.imageUrl).subscribe(() => {
      this.router.navigate(['/event'])
    });
  }

}
