import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponentM } from './modal.componentm';

describe('ModalComponent', () => {
  let component: ModalComponentM;
  let fixture: ComponentFixture<ModalComponentM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponentM ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponentM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
