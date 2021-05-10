import { Component, Input, OnInit } from '@angular/core';
import { DetailItem } from './detail-item';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  @Input()
  data:DetailItem | any;
  @Input() onDetailView:any;
  @Input()
  detailView:any;
  constructor() { }

  barStyle:string = "";
  ngOnInit(): void {
    this.barStyle = "background-color: limegreen;width: 80%;text-align:center;";
  }
  onDetailParentView()
  {
    this.onDetailView(this.data,this.detailView);
  }
}
