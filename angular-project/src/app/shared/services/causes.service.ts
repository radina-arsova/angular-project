import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cause } from '../interfaces/cause';

@Injectable({
  providedIn: 'root'
})
export class CausesService {

  causes: Cause[] = undefined;

  constructor(private http: HttpClient) { }

  load(id?: string){
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
      if(causes.length>0)
      this.causes=causes;
    })
  }

  donate(id, amount, value){
    return this.http.put<Cause>(`causes/donate/${id}`, { amount, value });
  }

  edit(id, name, title, description, imageUrl){
    return this.http.put<Cause>(`causes/edit/${id}`, { name, title, description, imageUrl });
  }

  delete(id){
    return this.http.delete(`causes/delete/${id}`);
  }
}
