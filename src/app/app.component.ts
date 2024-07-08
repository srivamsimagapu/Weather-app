import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
     searchForm! : FormGroup;
     weather : any;
     constructor(private fb:FormBuilder,
           private service:WeatherService
     ){}

     ngOnInit(){
      this.searchForm = this.fb.group({
        city: [null,Validators.required]
      })
     }

     searchWeather(){
      console.log(this.searchForm.value);
      this.service.searchWeatherByCity(this.searchForm.get(['city'])!.value).subscribe((resp) => {
        console.log(resp);
        this.weather = resp.data;
       
      })
}}
