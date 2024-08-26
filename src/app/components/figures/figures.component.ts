import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FigureServiceService } from '../../services/FigureService/figure-service.service';
import { Figure } from '../../modelo/Figures';
import { NgForOf, NgIf, KeyValuePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleServiceService } from '../../services/toggleService/toggle-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { CarrinhoServiceService } from '../../services/carrinho/carrinho-service.service';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    KeyValuePipe,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
  ],

  templateUrl: './figures.component.html',
  styleUrl: './figures.component.scss',
})
export class FiguresComponent implements OnInit {
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
    private toggleFormService: ToggleServiceService,
    private carrinhoService: CarrinhoServiceService
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


  onDelete(figure: Figure): void {
    if (confirm('Tem certeza que deseja excluir esta figure?')){
      this.figureService.deleteFigure(figure).subscribe(() => {
        this.figures = this.figures.filter((f) => f.id !== figure.id);
      });
    }
  }

  onAddToCart(figureId: string | undefined): void {
    if (figureId) {
      this.carrinhoService.adicionarCarrinho(figureId).subscribe(
        response => {
          console.log('Item adicionado ao carrinho:', response);
        },
        error => {
          console.error('Erro ao adicionar item ao carrinho:', error);
        }
      );
    } else {
      console.error('ID da figura é indefinido');
    }
  }

  salvarFigure(): void {
    const figure: Figure = {
      id: this.editingFigure?.id || '',
      informacao: this.informacao,
      ano: this.ano,
      valor: this.valor,
      tamanho: this.tamanho,
      imageUrl: this.imageUrl
    };

    if (this.editingFigure && this.editingFigure.id) {
      this.figureService.updateFigure(figure).subscribe(() => {
        this.updateFigureInList(figure);
        this.resetForm();
      });
    } else {
      this.figureService.addFigure(figure).subscribe((newFigure) => {
        this.figures.unshift(newFigure); // Adiciona o novo item no início da lista
        this.resetForm();
      });
    }
  }

  private updateFigureInList(updatedFigure: Figure): void {
    this.figures = this.figures.filter(f => f.id !== updatedFigure.id);
    this.figures.unshift(updatedFigure);
  }



  onEdit(figure: Figure): void {
    this.editingFigure = { ...figure };
    this.informacao = figure.informacao;
    this.ano = figure.ano;
    this.valor = figure.valor;
    this.tamanho = figure.tamanho;
    this.imageUrl = figure.imageUrl;
    this.formVisible = true;
  }


  onAdd(): void {
    this.editingFigure = null;
    this.informacao = '';
    this.ano = '';
    this.valor = 0;
    this.tamanho = 0;
    this.formVisible = true;
  }

  public resetForm(): void {
    this.informacao = '';
    this.ano = '';
    this.valor = 0;
    this.tamanho = 0;
    this.formVisible = false;
    this.editingFigure = null;
  }
}
