import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  @Input()
  gameTitle: string =""
  @Input()
  gameValue: string =""
  @Input()
  gamePrice: string =""

}
