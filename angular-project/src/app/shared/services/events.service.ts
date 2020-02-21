import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: Event[];
  guests: any;

  constructor(private http: HttpClient) { }

  load(id?: string){
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
      if(events.length>0)
      this.events=events;
      else
      this.events=undefined;
    })
  }

  delete(id){
    return this.http.delete(`events/delete/${id}`);
  }

  come(id){
    return this.http.put(`events/will-come/${id}`, {}).pipe(tap((user) => {
      this.guests = user;
    }));;
  }

  checkGuests(id){
    return this.http.get(`events/check-guests/${id}`).subscribe(guest => {
      this.guests=guest;
    });
  }

  edit(id, title, description, imageUrl){
    return this.http.put<Event>(`events/edit/${id}`, {title, description, imageUrl });
  }
}
