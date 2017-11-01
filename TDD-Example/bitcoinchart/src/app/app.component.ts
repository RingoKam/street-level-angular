import { Component } from '@angular/core';
import { BitCoinService } from './bitcoin.service'
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public CoinData: any; 
  public UpdatedDate: any;
  public Bpi_data: Array<Object>;
  public Bpi_Date: Array<string>;
  public startDate: Date = new Date()
  public endDate: Date = new Date();

  constructor(private _bitCoinService: BitCoinService ){
  }

  ngOnInit() {
    this.GetRecords(); 
  }

  public GetRecords() {
    const startDate = moment(this.startDate).format("YYYY-MM-DD");
    const endDate = moment(this.endDate).format("YYYY-MM-DD");
    this._bitCoinService.GetCoinsChart(startDate, endDate).then((data) => {
      console.log(data);
      this.CoinData = data;
      this.Bpi_Date = Object.keys(data.bpi);
      this.Bpi_data = [
        {
          name:"BitCoin",
          data: Object.values(data.bpi)
        }
      ]
    });
  }
  
}
