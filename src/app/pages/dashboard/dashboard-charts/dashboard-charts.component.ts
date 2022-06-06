import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
import { LayoutModule } from 'src/app/layout/layout.module';
import { LayoutService } from 'src/app/layout/services/layout.service';
highcharts3D(Highcharts);

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})
export class DashboardChartsComponent implements OnInit {

  constructor(private layoutService:LayoutService) {
    this.layoutService.componentTitle="Dashboard";
    this.layoutService.componentTitle="Reports & Statistics";
   }

  ngOnInit(): void {
  }

  highcharts = Highcharts;
  areaChartOptions:any = {   
    chart: {
      type: 'area'
  },
  title: {
      text: 'Chart'
  },
  xAxis: {
      categories: ['Oct-2021', 'Nov-2021', 'Dec-2021', 'Jan-2022']
  },
  yAxis: {
      tickPixelInterval: 50,
      min: 0,
      max: 175
      //type: 'logarithmic'
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'TOX',
      data: [0, 0, 0, 0]
  }, {
      name: 'Blood',
      data: [0, 12, 45, 20]
  }, {
      name: 'Infectious Disease',
      data: [0, 25, 22, 150]
  }, {
      name: 'CGX',
      data: [0, 7, 15, 2]
  }]
  };

  pieChatOptions:any = {   
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: ''
  },
  subtitle: {
      text: ''
  },
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  series: [{
      name: 'Percentage',
      data: [
          ['CGX', 56],
          ['TOX', 13],
          ['Blood', 24],
          ['Infectious Desease', 7    ]
      ]
  }],
  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              }
          }
      }]
  }
  };

  pieChatOptions1:any = {   
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
  },
  title: {
      text: ''
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },
  series: [{
      type: 'pie',
      name: 'Percentage',
      data: [
          {
              name: 'New Orders',
              y: 244,
              sliced: true,
              selected: true
          },
          ['Pending Orders', 31],
          ['New Results', 3],
          ['Validated', 45],
          ['Send To Billing', 2],
          ['Rejected', 1],
          ['Missing Info', 4],
          ['Completed', 121],
      ]
  }],
  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              }
          }
      }]
  }
  };
}
