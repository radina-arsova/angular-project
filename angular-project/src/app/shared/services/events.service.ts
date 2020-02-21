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

  delete(id){
    return this.http.delete(`events/delete/${id}`);
  }

  come(id){
    return this.http.put(`events/will-come/${id}`, {});
  }

  checkGuests(id){
    return this.http.get(`events/check-guests/${id}`);
  }
}
