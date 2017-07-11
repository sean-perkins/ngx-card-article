/* ts-lint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxCardArticleComponent } from './ngx-card-article.component';

describe('NgxCardArticleComponent', () => {
    let component: NgxCardArticleComponent;
    let fixture: ComponentFixture<NgxCardArticleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NgxCardArticleComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxCardArticleComponent);
        component = fixture.componentInstance;
    });

    it('should create the ngx-card-article', () => {
        expect(component).toBeTruthy();
    });
});
