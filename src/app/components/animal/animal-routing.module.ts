import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalIndexComponent } from './animal-index/animal-index.component'; 
import { AnimalAllComponent } from './animal-all/animal-all.component';
import { AnimalComponent } from './animal.component'; 
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

const routes: Routes = [
  {path: "animals", component: AnimalComponent,
    children:[
      {path: "index", component: AnimalIndexComponent},
      {path: "indexAll", component: AnimalAllComponent},
      {path: "detail/:id", component: AnimalDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
