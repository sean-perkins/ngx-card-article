import { Component } from '@angular/core';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

    cards: any[] = [
        {
            image: 'https://unsplash.it/800/800/?image=0',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(92, 107, 192, 0.1)',
            endColor: 'rgba(92, 107, 192, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=122',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(41, 182, 246, 0.1)',
            endColor: 'rgba(41, 182, 246, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=144',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(41, 182, 246, 0.1)',
            endColor: 'rgba(41, 182, 246, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=0',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(92, 107, 192, 0.1)',
            endColor: 'rgba(92, 107, 192, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=122',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(41, 182, 246, 0.1)',
            endColor: 'rgba(41, 182, 246, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=144',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(41, 182, 246, 0.1)',
            endColor: 'rgba(41, 182, 246, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=0',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(92, 107, 192, 0.1)',
            endColor: 'rgba(92, 107, 192, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=122',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(41, 182, 246, 0.1)',
            endColor: 'rgba(41, 182, 246, 0.8)'
        },
        {
            image: 'https://unsplash.it/800/800/?image=144',
            title: 'How to create a card based article with HTML5 & SASS',
            startColor: 'rgba(41, 182, 246, 0.1)',
            endColor: 'rgba(41, 182, 246, 0.8)'
        }
    ]

}
