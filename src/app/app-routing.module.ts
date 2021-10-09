import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClothesComponent } from './add-clothes/add-clothes.component';
import { ClothesComponent } from './clothes/clothes.component';
import { EditClothesComponent } from './edit-clothes/edit-clothes.component';

const routes: Routes = [
  {path:'',component: ClothesComponent},
  {path:'add',component: AddClothesComponent},
  {path:'edit',component: EditClothesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
