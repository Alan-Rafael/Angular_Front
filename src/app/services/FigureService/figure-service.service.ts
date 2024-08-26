import {HttpClient, HttpParams} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import { Figure } from "../../modelo/Figures";
import { FigurePage } from "../../modelo/Figure-page";

@Injectable({
  providedIn: 'root'
})
export class FigureServiceService {


  private ApiUrlGetFigures = '/figures/getAll';
  private ApiDeleteUrl =  '/figures/';
  private ApiAddUrl =  '/figures/';
  private ApiEditUrl =  '/figures';




  constructor(private http:  HttpClient) {}

  getFiguresPages(pageIndex: number, pageSize: number): Observable<FigurePage> {
    let params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('size', pageSize.toString());

    return this.http.get<FigurePage>(this.ApiUrlGetFigures, { params });
  }


  getFigures() : Observable <Figure[]>{
    return this.http.get<Figure[]>(this.ApiUrlGetFigures);

 }

  deleteFigure(figure: Figure): Observable<void> { // Use void se não retornar um valor
    console.log(figure.id);
    return this.http.delete<void>(`${this.ApiDeleteUrl}${figure.id}`);
  }

  addFigure(figure: Figure): Observable<Figure> {
    return this.http.post<Figure>(`${this.ApiAddUrl}`, figure);
  }


  updateFigure(figure: Figure): Observable<Figure> {
    if (!figure.id) {
      throw new Error('ID da figura não fornecido');
    }
    return this.http.put<Figure>(`${this.ApiEditUrl}/${figure.id}`, figure);
  }

}
