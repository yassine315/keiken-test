import {Component, OnInit} from '@angular/core';
import {RestClientService} from './services/REST-client/rest-client.service';
import {Developer} from './entity/developer';
import {CurentDeveloperService} from './services/curent-developer/curent-developer.service';
import {Route, Router} from '@angular/router';
import {Project} from './entity/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data:Array<Developer> = new Array<Developer>();
  dataFilter:Array<Developer> = new Array<Developer>();

  searchedKey:string = ""

  title = 'Keiken';

  constructor(private restClient:RestClientService, private curentDeveloper: CurentDeveloperService, private router:Router) {}

  clickDeveloper(developer) {
    this.curentDeveloper.setDeveloper(developer)
    this.router.navigate(['/details'])
  }

   ngOnInit(): void {
    this.restClient.getData().subscribe(
      (data: []) => {
        data.forEach(user => {
          this.restClient.getUserGitHub(user['githubUsername']).subscribe(
            gitHubUser => {
              this.data.push(new Developer(user['name'], user['githubUsername'], gitHubUser['avatar_url'], user['projects']))
              this.dataFilter.push(new Developer(user['name'], user['githubUsername'], gitHubUser['avatar_url'], user['projects']))
            }

          )
        })
      },
      error => console.error(error));
  }

  onModelChange(){
    this.data = this.dataFilter.filter((value) => {
      for (let project of value.projets){
          if(project.projectName.includes(this.searchedKey)){
            return true;
          }
        }
      return false
    })
    console.log(this.data.length)
  }
}
