﻿import {NgModule}           from "@angular/core";
import {BrowserModule}      from "@angular/platform-browser";
import {AppComponent}       from "../components/app.component";
import {AppRoutingModule}   from "./app-routing.module";
import {HttpModule}         from "@angular/http";
import {HomeComponent}      from "../components/home.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}
