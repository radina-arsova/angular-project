import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cause } from '../interfaces/cause';

@Injectable({
  providedIn: 'root'
})
export class CausesService {

  causes: Cause[];

  constructor(private http: HttpClient) { }

  load(id?: number){
    this.http.get<Cause[]>(`causes${id ? `/${id}` : ''}`).subscribe(causes =>
    {
      this.causes=causes;
      console.log(this.causes)
    })
  }

  create(cause: any){
    return this.http.post<Cause>('causes/create', cause);
  }

  loadUsersCauses(){
    return this.http.get<Cause[]>('causes/user').subscribe(causes => {
      this.causes=causes;
      console.log(causes)
    })
  }

  donate(id, amount, value){
    return this.http.put<Cause>(`causes/donate/${id}`, amount, value);
  }
}
