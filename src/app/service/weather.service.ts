import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey="1fb997620bmsh2cef04b21fe1e25p177c02jsn4cc2c0a2cb96";
  private apiUrl="https://the-weather-api.p.rapidapi.com/api/weather";

  constructor(private http:HttpClient) { }

  searchWeatherByCity(city:string):Observable<any>{
    const headers = new HttpHeaders()
     .set("X-RapidAPI-Key",this.apiKey)
     .set("X-RapidAPI-Host","the-weather-api.p.rapidapi.com");

     const option={headers};

     return this.http.get(`${this.apiUrl}/${city}`,option)
  }
}
