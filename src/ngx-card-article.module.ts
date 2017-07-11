import { NgxCardArticleComponent } from './ngx-card-article/ngx-card-article.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        NgxCardArticleComponent
    ],
    exports: [
        NgxCardArticleComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ]
})
export class NgxCardArticleModule {
    static forRoot() {
        return {
            ngModule: NgxCardArticleModule,
            providers: []
        };
    }
}
