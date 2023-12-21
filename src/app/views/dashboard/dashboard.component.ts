import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ComprasService } from "../../core/service/compras.service";
import { Compra } from "./model/compra";

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { cilList, cilShieldAlt,
        cibCircle,cibCircleci,
        cilXCircle,cilChartLine,cilAlignCenter } from '@coreui/icons';
import { Observable } from 'rxjs';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private chartsData: DashboardChartsData,
              private compraService: ComprasService) {}

  icons = { cilList, cilShieldAlt,cibCircle,cibCircleci,cilXCircle,cilChartLine,cilAlignCenter};



  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });
  public listaCompra: Array<Compra> = [];

  ngOnInit(): void {
    this.initCharts();
    this.buscaCompra();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

  formatarData(data: string): string {
    return new Date(data).toLocaleString('pt-BR');
  }

  private buscaCompra(){
    this.compraService.buscaCompras().subscribe({
      next:response =>{
        console.log(" Resposta da API. ", response);
      }
    });

  }

}
