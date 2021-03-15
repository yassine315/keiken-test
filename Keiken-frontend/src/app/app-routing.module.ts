import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModalComponentM} from './component/modal/modal.componentm';

const routes: Routes = [
  {path:'details', component:ModalComponentM}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
