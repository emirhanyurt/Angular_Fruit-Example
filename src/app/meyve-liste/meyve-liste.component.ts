import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeyveModel } from 'src/models/meyveler';

@Component({
  selector: 'app-meyve-liste',
  templateUrl: './meyve-liste.component.html',
  styleUrls: ['./meyve-liste.component.scss']
})
export class MeyveListeComponent implements OnInit {
 
 @Input() meyveler:MeyveModel[] = []
 @Output() myEvent:EventEmitter<any> = new EventEmitter();
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  delete(item:MeyveModel)
  {
    this.myEvent.emit({ data: item})
    // let index:number = this.meyveler.indexOf(item)
    // this.meyveler.splice(index,1)
    // this.toastr.error(item.MeyveAd+" İsmli Meyve Silindi","Bilgi!")
  }

}
