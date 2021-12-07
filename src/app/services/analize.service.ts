import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Const} from '../common/const';

@Injectable({
  providedIn: 'root'
})
export class AnalizeService {

  value_operation: string;
  value_data: string;

  constructor(private http: HttpClient) { }

  getResults(params: any = {}) {
    return this.http.get(Const.BASE_URL + '/main_logic', {params: params});
  }
}
