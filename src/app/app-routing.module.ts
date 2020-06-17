import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';


const routes: Routes = [
  { path: 'primero-component', component: PrimeroComponent },
  { path: 'segundo-component', component: SegundoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
