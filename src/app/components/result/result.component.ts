import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {AnalizeService} from '../../services/analize.service';
Chart.register(...registerables);

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, AfterViewInit, OnDestroy {

  title: string;
  action: string;
  result: number;
  description: string;
  values: any[];
  ox: any[];
  SVC_prediction: string;
  KNN_prediction: string;
  description2: string;
  report: string[] = [];
  matrix: string[] = [];

  constructor(public analize: AnalizeService) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.getDataResult();
  }

  getDataResult() {
    this.ox = [];
    this.values = [];
    this.analize.getResults({action: this.analize.value_operation, data: this.analize.value_data}).subscribe((data: any) => {
      console.log(data);
      this.title = data.title;
      this.description = data.description;
      if (this.analize.value_operation === 'klaster') {
        this.KNN_prediction = data.KNN_prediction;
        this.SVC_prediction = data.SVC_prediction;
        this.description2 = data.description2;
        this.report = data.report.split('\n');

        let str = '';
        let it = 0;
        for (let i = 0; i < data.matrix.length; i++) {
          if (it === 6) {
            this.matrix.push(str);
            str = '';
            it = 0;
          }
          str += data.matrix[i] + ' ';
          it++;
        }
        console.log(this.matrix);
        this.chart_scatter(this.values, this.title, this.ox);
      } else {
        this.result = +data.result;
        this.action = data.action;
        this.values = data.data;
        for (let i = 0; i < data.ages.length; i++) {
          this.ox.push(data.ages[i] + ' ' + data.genres[i] + ' ' + data.streams[i]);
        }
        this.chart_line(this.values, this.title, this.ox);
      }
    });
  }

  ngOnDestroy(): void {

  }

  chart_line(data, label, labels) {
    const canvas: any = document.getElementById('myChart');
    const context = canvas.getContext('2d');
    const config = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Line Chart'
          }
        }
      },
    };

    // @ts-ignore
    const myChart = new Chart(context, config);
  }

  chart_scatter(data, label, labels) {
    const config = {
      type: 'scatter',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Scatter Chart'
          }
        }
      },
    };
  }
}
