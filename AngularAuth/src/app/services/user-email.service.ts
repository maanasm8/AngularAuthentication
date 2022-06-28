import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserEmailService {
  constructor(private httpS: HttpClient) {}

  postData(data: any) {
    return this.httpS.post('http://localhost:3000/userEmail', data);
  }
}
