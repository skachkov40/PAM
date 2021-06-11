import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MsgService } from './msg.service';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule }   from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    TextFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule

  ],
  providers: [
    MsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
