import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './featuers/category/category-list/category-list.component';
import { AddCategoryComponent } from './featuers/category/add-category/add-category.component';
import { EditCategoryComponent } from './featuers/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './featuers/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './featuers/blog-post/add-blogpost/add-blogpost.component';
import { LoginComponent } from './featuers/auth/login/login.component';


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
    },
    {
      path: 'admin/blogposts',
      component: BlogpostListComponent
    },
    {
      path:'admin/blogposts/add',
      component: AddBlogpostComponent
    },
    {
      path:'login',
      component: LoginComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
