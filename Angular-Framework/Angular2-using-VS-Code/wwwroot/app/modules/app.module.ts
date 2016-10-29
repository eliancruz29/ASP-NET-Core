import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PersonService } from '../services/person.service';
import { AppComponent } from '../components/app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [AppComponent],
    providers: [
        PersonService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
