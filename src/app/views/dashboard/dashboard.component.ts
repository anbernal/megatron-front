import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { cilList, cilShieldAlt,
        cibCircle,cibCircleci,
        cilXCircle,cilChartLine,cilAlignCenter } from '@coreui/icons';

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

interface MoedaCompra {
  name: string;
  quantidade: string;
  dataCompra: string;
  imagem: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
new: any;
  constructor(private chartsData: DashboardChartsData) {
  }

  icons = { cilList, cilShieldAlt,cibCircle,cibCircleci,cilXCircle,cilChartLine,cilAlignCenter};

  public moedasCompra: MoedaCompra[] = [
    {
      name: 'sei-network',
      quantidade: '20',
      dataCompra: '08-10-2023 00:42:29',
      imagem: 'https://assets.coingecko.com/coins/images/28205/large/Sei_Logo_-_Transparent.png?1696527207',
    },
    {
      name: 'algorand',
      quantidade: '4',
      dataCompra: '08-10-2023 00:42:29',
      imagem: 'https://assets.coingecko.com/coins/images/4380/large/download.png?1696504978',
    },
    {
      name: 'san-diego-coin',
      quantidade: '700',
      dataCompra: '08-10-2023 00:42:29',
      imagem: 'https://assets.coingecko.com/coins/images/12316/large/j2FpS99.png?1599087149',
    },
    {
      name: 'elrond-erd-2',
      quantidade: '1000',
      dataCompra: '08-10-2023 00:42:29',
      imagem: 'https://assets.coingecko.com/coins/images/12335/large/egld-token-logo.png?1696512162',
    },

  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
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
}
