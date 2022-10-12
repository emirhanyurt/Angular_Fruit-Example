import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeyveModel } from 'src/models/meyveler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  meyve: string = "";
  status: boolean = true;
  meyveler: MeyveModel[] = [];

  /**
   *
   */
  constructor(private toastrService: ToastrService) {


  }
  MeyveEkle() {
    this.status = true
    this.meyveler.forEach(element => {
      if (element.MeyveAd == this.meyve) {
        this.status = false
      }
    });
    if (this.status) {
      let meyve = new MeyveModel();
      meyve.MeyveAd = this.meyve
      meyve.Tarih = Date()
      this.meyveler.push(meyve)
      this.meyve = ""
      this.toastrService.success("Meyve Başarılı Bir Şekilde Eklendi", "İşlem Başarılı")
    }
  }
 delete(event:any)
 {
   let index:number = this.meyveler.indexOf(event)
     this.meyveler.splice(index,1)
     this.toastrService.error(event.MeyveAd+" İsmli Meyve Silindi","Bilgi!")
 }
}
