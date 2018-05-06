import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestaurantService} from '../../app/services/restaurant.service';

@Component({
  selector: 'page-rest',
  templateUrl: 'rest.html'
})
export class Restaurant {

  items:any;
  constructor(public navCtrl: NavController,private restaurantService:RestaurantService) {

  }

  ngOnInit()
  {
    this.getPost('sports',5);
  }

  getPost(category,limit)
  {
    this.restaurantService.getPosts(category,limit).subscribe(response=>{console.log(response);
      this.items=response.data.children;})
  }
}
