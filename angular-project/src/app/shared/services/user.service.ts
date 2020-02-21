import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: { username: string; password: string; balance: number; _id: string } = undefined;

  get isLoged() {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) {
    this.http.get('user')
      .subscribe((user: any) => {
        this.currentUser = user;
      }, () => {
        this.currentUser = null;
      })
  }

  login(username: string, password: string) {
    return this.http.post('user/login', { username, password }).pipe(tap((user: any) => {
      this.currentUser = user;
    }));
  }

  register(username: string, password: string, imageUrl: string, balance: number) {
    return this.http.post('user/register', { username, password, imageUrl, balance });
  }

  logout() {
    return this.http.post('user/logout', {}).pipe(tap(() => {
      this.currentUser = null;
    }));
  }

  addMoney(balance: number) {
    return this.http.put('user/add', { balance }).pipe(tap(() => {
      this.currentUser.balance = balance;
    }));
  }

  edit(username, password){
    return this.http.put(`user/edit`, {username, password }).pipe(tap(() => {
      this.currentUser.username = username;
    }));;
  }

  delete(){
    return this.http.delete('user/delete');
  }
}
