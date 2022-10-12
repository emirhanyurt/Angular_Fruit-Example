import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent} from './service.component';
import { ErrorComponent } from './error/error/error.component';
import { AddFormComponent } from './add-form/add-form.component';
import { SuccsesComponent } from './succses/succes-component';
@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    AddFormComponent,
    SuccsesComponent,
    ErrorComponent
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
