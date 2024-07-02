import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories$?: Observable<Category[]>;
  dataSource: MatTableDataSource<Category>;
  displayedColumns: string[] = ['id', 'name', 'urlHandle', 'edit']; // Columns to display in mat-table


  constructor(private categoryService: CategoryService) {
    this.dataSource = new MatTableDataSource<Category>();

  }


  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.categories$.subscribe(categories => {
      this.dataSource.data = categories; // Assign data to MatTableDataSource
    });
  }
  
}
