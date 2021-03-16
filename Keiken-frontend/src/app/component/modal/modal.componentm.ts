import {AfterViewInit, Component, ElementRef, Injectable, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalConfig, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CurentDeveloperService} from '../../services/curent-developer/curent-developer.service';
import {any} from 'codelyzer/util/function';
import {Router} from '@angular/router';
import {Developper} from '../../entity/developper';
import {ModalContentComponent} from '../modal-content/modal-content.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ModalComponentM{

  @ViewChild('content')
  content:  TemplateRef<any>;

  @Input()
  curentDeveloper: Developper


  constructor( private modalService: NgbModal, private modalConf:NgbModalConfig, private router:Router, public activeModal: NgbActiveModal) {
    modalConf.backdrop = 'static';
    modalConf.keyboard = false;
  }

  setDeveloper(developer){
    this.curentDeveloper = developer;
    const resulta = this.modalService.open(ModalContentComponent, {ariaLabelledBy: 'modal-basic-title'});
    resulta.componentInstance.developer = developer
  }
}
