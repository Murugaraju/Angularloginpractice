import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public foods;
  public temp = false;
  constructor( private _demoService: DemoService) { }
  ngOnInit() {
    // this.getFoods();
  }
  getFoods() {
    this.temp = true;
    this._demoService.getFoods().subscribe(
      data => { console.log("printing data--->", data);
                this.temp = false; },
      err => console.log("error--->",err),
      () => console.log("completed")
    )
  }
}
