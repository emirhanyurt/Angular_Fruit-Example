import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent} from './service.component';
import { ErrorComponent } from './error/error/error.component';
import { AddFormComponent } from './add-form/add-form.component';
import { SuccsesComponent } from './succses/succes-component';
import { FormsModule } from '@angular/forms';
import { MeyveListeComponent } from './meyve-liste/meyve-liste.component';
@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    AddFormComponent,
    SuccsesComponent,
    ErrorComponent,
    MeyveListeComponent,
    
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastNoAnimationModule.forRoot({
      closeButton:true,
      progressBar:true
    }
      
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
