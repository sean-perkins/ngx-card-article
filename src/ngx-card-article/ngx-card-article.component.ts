import {
    Component, Input
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ngx-card-article',
    styleUrls: ['./ngx-card-article.component.scss'],
    templateUrl: './ngx-card-article.component.html'
})
export class NgxCardArticleComponent {

    @Input() photoUrl: string;

    @Input() startColor = 'rgba(92, 107, 192, 0.1)';
    @Input() endColor = 'rgba(92, 107, 192, 0.8)';

    @Input() title: string;

    constructor(private sanitizer: DomSanitizer) { }

    get backgroundImage(): any {
        return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(to bottom, ${this.startColor}, ${this.endColor})`);
    }


}
