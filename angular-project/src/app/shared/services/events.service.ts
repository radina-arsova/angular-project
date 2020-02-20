import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: Event[];

  constructor(private http: HttpClient) { }

  load(id?: number){
    this.http.get<Event[]>(`events${id ? `/${id}` : ''}`).subscribe(events =>
    {
      this.events=events;
      console.log(this.events)
    })
  }

  create(event: any){
    return this.http.post<Event>('events/create', event);
  }

  loadUsersEvents(){
    return this.http.get<Event[]>('events/user').subscribe(events => {
      this.events=events;
      console.log(events)
    })
  }

  // donate(amount: number){
  //   return this.http.put(`http://localhost:9999/cause/${this.selectedCause._id}`, {
  //     body: { collectedAmount: this.selectedCause.collectedAmount + amount }
  //   });
  // }
}
