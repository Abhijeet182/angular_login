import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { socialconfig } from "../app/app.constant";

@Injectable({
  providedIn: 'root'
})
export class GauthService {
  private actionUrl: string;
  constructor(private _http: HttpClient, private socialconfig: socialconfig) {
    this.actionUrl = socialconfig.serverWithApiUrl + 'google';
  }
  getRequest() {
    return this._http.get(this.actionUrl)
  }
}
