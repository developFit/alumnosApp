import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaAlimnosComponent } from "./pages/lista-alimnos/lista-alimnos.component";

const routes: Routes = [
    {
    path: 'listaAlumnos',
    component: ListaAlimnosComponent},
    {
    path: '**',
    redirectTo: 'listaAlumnos'
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  

export class AppRoutingModule {

}