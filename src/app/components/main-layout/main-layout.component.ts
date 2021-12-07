import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AnalizeService} from '../../services/analize.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  actions: {value: string, name: string}[] = [
    {value: 'sum', name: 'Сумма' },
    {value: 'average', name: 'Среднее' },
    {value: 'max', name: 'Максимальное' },
    {value: 'min', name: 'Минимальное' },
    {value: 'med', name: 'Медиана' },
    {value: 'klaster', name: 'Классификация'}
  ];

  data: {value: string, name: string}[] = [
    {value: 'Internships', name: 'Стажировки' },
    {value: 'CGPA', name: 'CGPA' },
    {value: 'Hostel', name: 'Наличие жилья' },
    {value: 'HistoryOfBacklogs', name: 'История невыполненных работ' },
    {value: 'PlacedOrNot', name: 'Размещены или нет' }
  ];
  value = this.actions[0];
  iter = 0;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private analize: AnalizeService) { }

  ngOnInit(): void {
    if (this.iter = 0) {
      window.location.reload();
      this.iter++;
    }

  }

  setAction(value) {
    this.analize.value_operation = value;
  }

  setData(value) {
    this.analize.value_data = value;
  }

  ngOnDestroy(): void {

  }
}
