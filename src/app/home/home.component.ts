import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FoodService } from '../food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit():void{}
}