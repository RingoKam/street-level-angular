import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

@Injectable()
export class BitCoinService {
  constructor(private http: Http) {}

  public GetCoinsChart(startDate = '2017-10-01', endDate = '2017-10-31'): Promise<any> {
    return this.http
      .get(`https://api.coindesk.com/v1/bpi/historical/close.json?`)
      .map(data => data.json())
      .toPromise();
  }
}
