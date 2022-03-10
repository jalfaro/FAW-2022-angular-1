import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoComponent } from './components/saludo/saludo.component';
import { TextoComponent } from './components/texto/texto.component';

const routes: Routes = [
  {path:"", component: SaludoComponent },
  {path:"texto", component: TextoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
