import { Component, ViewChild } from '@angular/core';

import { FigureServiceService } from '../../services/FigureService/figure-service.service';
import { Figure } from '../../modelo/Figures';
import { ToggleServiceService } from '../../services/toggleService/toggle-service.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-figures-not-login',
  standalone: true,
  imports:
  [
    NgForOf,
    KeyValuePipe,
    NgIf,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    RouterLink
  ],

  templateUrl: './figures-not-login.component.html',
  styleUrl: './figures-not-login.component.css'
})
export class FiguresNotLoginComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 15, 25];
  totalItems: number = 0;
  figures: Figure[] = [];
  informacao: string = '';
  ano: string = '';
  valor: number = 0;
  tamanho: number = 0;
  imageUrl: string = '';
  formVisible: boolean = false;
  editingFigure: Figure | null = null;



  constructor(
    private figureService: FigureServiceService,
    private toggleFormService: ToggleServiceService
  ) {}

          // INITI
  ngOnInit(): void {
    this.figureService.getFigures().subscribe((dado) => {
      this.figures = dado;
    });

    this.toggleFormService.formVisibility$.subscribe((visible) => {
      this.formVisible = visible;
    });
  }

        // PAGINACAO
  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
  }


  getPaginatedFigures() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    return this.figures.slice(startIndex, endIndex);
  }



}
