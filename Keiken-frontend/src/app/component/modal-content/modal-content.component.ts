import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {Developper} from '../../entity/developper';

@Component({
  selector: 'app-modal-content',
  template : `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-basic-title">Details</h4>
      <button type="button" class="close" aria-label="Close" (click)="close()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <img src="{{developer.urlAvatar}}" alt="Avatar" class=" avatar p-2">
        </div>
        <div class="row d-flex justify-content-center">
          <h1>{{developer.githubUsername}}</h1>
        </div>
        <div class="col d-flex justify-content-center">
          <h2>{{developer.name}}</h2>
        </div>
        <div class="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Project name</th>
                <th scope="col">Technologie</th>
              </tr>
            </thead>
            <tbody>
            <tr *ngFor="let project of developer.projects">
              <td>{{project['projectName']}}</td>
              <td>
                <div *ngFor="let tag of project['Technologies']" class="tag-project">
                  {{tag}}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="close()">Quitter</button>
    </div>
  `,
  styleUrls: ['./modal-content.component.css',]
})
export class ModalContentComponent implements OnInit {

  @Input() developer:Developper

  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  close(){
    this.activeModal.close()
    this.router.navigate([''])
    console.log("closed")
  }

  ngOnInit(): void {
  }

}
