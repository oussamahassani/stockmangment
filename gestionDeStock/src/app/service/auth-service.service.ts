import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl = "/api";



  constructor(private httpClient: HttpClient, private route: Router) { }

  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthentificated())

  addUser(user) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    // this.httpClient.post<any>(this.baseUrl+'users/addUser',user,{ headers: headers }).subscribe(
    this.httpClient.post<any>(this.baseUrl + '/users/addUser', user, { headers: headers }).subscribe(
      (msg) => {
        console.log(msg),
          location.reload()
      },
      (error) => console.log(error)
    );
  }

  deleteUser(id) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
  
    return this.httpClient.delete<any>(this.baseUrl + `/users/deletUser/${id}`, { headers: headers })
  }
  getUser() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const user = this.httpClient.get(this.baseUrl + '/users/allUsers' ,  { headers: headers });
    return user;
  }

  login(log) {
    this.httpClient.post('http://localhost:9000/auth/login', log).subscribe(
      (response: any) => {
        try {
          if (response.token) {
            console.log("ok");
            localStorage.setItem('token', response.token);
            localStorage.setItem('useremail', response.user.username);
            
            this.isLoginSubject.next(true);
            this.route.navigateByUrl('/dashboard');
          }
        } catch (err) {
          console.log("err", err);
          alert("mot de passe ou email incorrect");
        }
      },
      (error) => {
        if (error.status === 401) {
          console.log("Unauthorized", error.message);
          alert("Unauthorized: mot de passe ou email incorrect");
        } else {
          console.log("Error", error.message);
          alert("An error occurred: " + error.message);
        }
      }
    );


  }

  public isAuthentificated(): boolean {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('role');
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }

  public UserAuthentificated(): boolean {

    const user = localStorage.getItem('role');
    if (user === "admin") {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    console.log("ok");

    localStorage.removeItem('token');
    localStorage.removeItem('authentificated_user');
    this.isLoginSubject.next(false);
    this.route.navigateByUrl('/admin')

  }
}
