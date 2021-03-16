import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChargeDataService {

  urlJsonData = "assets/MockTestFront.json"

  constructor(private http: HttpClient) { }

  getJsonData() {
    return this.http.get(this.urlJsonData);
  }
}
