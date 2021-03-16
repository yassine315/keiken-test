import {Component, OnInit} from '@angular/core';
import {RestClientService} from './services/REST-client/rest-client.service';
import {Developper} from './entity/developper';
import {CurentDeveloperService} from './services/curent-developer/curent-developer.service';
import {Route, Router} from '@angular/router';
import {Project} from './entity/project';
import {ChargeDataService} from './services/charge-data/charge.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data:Array<Developper> = new Array<Developper>();
  dataFilter:Array<Developper> = new Array<Developper>();

  searchedKey:string = ""

  title = 'Keiken';

  constructor(private restClient:RestClientService, private curentDeveloper: CurentDeveloperService, private router:Router, private chargeData: ChargeDataService) {}

  clickDeveloper(developer) {
    this.curentDeveloper.setDeveloper(developer)
    this.router.navigate(['/details'])
  }

   ngOnInit(): void {
    this.restClient.getData().subscribe(
      (data: []) => {
        data = data['_embedded']['developpers']
        data.forEach(user => {
          this.restClient.getUserGitHub(user['githubUsername']).subscribe(
            gitHubUser => {
              this.data.push(new Developper(user['name'], user['githubUsername'], gitHubUser['avatar_url'], user['projects']))
              this.dataFilter.push(new Developper(user['name'], user['githubUsername'], gitHubUser['avatar_url'], user['projects']))
            }

          )
        })
      },
      error => console.error(error));
  }

  onModelChange(){
    this.data = this.dataFilter.filter((value) => {
      for (let project of value.projects){
          if(project.projectName.includes(this.searchedKey)){
            return true;
          }
        }
      return false
    })
    console.log(this.data.length)
  }

  chargerData() {
      this.chargeData.getJsonData().subscribe(
        (data:Developper[]) =>{
          console.log(data)
          data.forEach(user =>{
            this.restClient.postDevelopper(user).subscribe()
          })
        }
      );

  }
}
