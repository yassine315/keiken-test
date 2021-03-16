import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Developper} from '../../entity/developper';
import {key} from '../../util/KeyGitHub';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  url = "http://localhost:8080/developpers"

  urlApiGitHub = "https://api.github.com/users/"

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(this.url)
  }

  postDevelopper(developper:Developper){
    return this.http.post(this.url,developper)
  }

  getUserGitHub(username: string){
  return this.http.get(this.urlApiGitHub+username,
    {headers:
                {Accept: 'application/vnd.github.v3+json', Authorization: key}
    })
  }
}
