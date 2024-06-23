import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './featuers/category/category-list/category-list.component';
import { AddCategoryComponent } from './featuers/category/add-category/add-category.component';
import { EditCategoryComponent } from './featuers/category/edit-category/edit-category.component';


  const routes: Routes = [
    {
      path: 'admin/categories',
      component: CategoryListComponent
    },
    {
      path: 'admin/categories/add',
      component: AddCategoryComponent
    },
    {
      path: 'admin/categories/:id',
      component: EditCategoryComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
