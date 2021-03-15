import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  url = "assets/MockTestFront.json"

  urlApiGitHub = "https://api.github.com/users/"

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(this.url)
  }

  getUserGitHub(username: string){
  return this.http.get(this.urlApiGitHub+username, {headers:{Accept: 'application/vnd.github.v3+json'}})
  }
}
