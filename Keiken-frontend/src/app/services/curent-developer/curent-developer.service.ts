import { Injectable } from '@angular/core';
import {ModalComponentM} from '../../component/modal/modal.componentm';
import {Developper} from '../../entity/developper';

@Injectable({
  providedIn: 'root'
})
export class CurentDeveloperService {

  currentDeveloper: Developper

  constructor(private modal: ModalComponentM) { }

  setDeveloper(developer:Developper){
    this.currentDeveloper = developer
    this.modal.setDeveloper(developer)
  }
}
