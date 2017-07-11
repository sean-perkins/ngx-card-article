import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { NgxCardArticleModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        NgxCardArticleModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
