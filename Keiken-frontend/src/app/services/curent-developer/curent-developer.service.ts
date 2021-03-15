import { Injectable } from '@angular/core';
import {ModalComponentM} from '../../component/modal/modal.componentm';
import {Developer} from '../../entity/developer';

@Injectable({
  providedIn: 'root'
})
export class CurentDeveloperService {

  currentDeveloper: Developer

  constructor(private modal: ModalComponentM) { }

  setDeveloper(developer:Developer){
    this.currentDeveloper = developer
    this.modal.setDeveloper(developer)
  }
}
