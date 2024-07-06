import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './featuers/category/category-list/category-list.component';
import { AddCategoryComponent } from './featuers/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './featuers/category/edit-category/edit-category.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BlogpostListComponent } from './featuers/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './featuers/blog-post/add-blogpost/add-blogpost.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './featuers/auth/login/login.component';
import {AuthInterceptor} from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BlogpostListComponent,
    AddBlogpostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
