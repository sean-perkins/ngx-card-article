# ngx-card-article

[![npm](https://img.shields.io/npm/v/ngx-card-article.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-card-article)
[![npm](https://img.shields.io/npm/dt/ngx-card-article.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-card-article)


Beautifully designed cards for use in an Angular 4 project.

1. `npm i ngx-card-article --s`
2. Add `NgxCardArticleModule` to your feature module.
```
import { NgxCardArticleModule } from 'ngx-card-article';

...
imports: [
    NgxCardArticleModule
]
...
```
3. Add font references to the top of your `index.html`.
```
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lato:100,200,300" rel="stylesheet">
```

![Example Image](http://i.imgur.com/MGG1dMF.jpg)


## Development

1. `npm run start` to launch dev-server of `src/` directory.
2. Verify component functionality in `examples/`.

## Usage

```
<ngx-card-article
        [title]="'My Title'"
        [photoUrl]="'http://www.example.com/image.jpg'"
        [startColor]="'#fff'"
        [endColor]="'rgba(50, 50, 50, 0.1)'">
        <div header>
            <li>Testing</li>
            <li>Testing</li>
        </div>
        <div footer>
            <li>Testing</li>
            <li>Testing</li>
        </div>
</ngx-card-article>
```

## Contributors

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|

## Credits
- Beautiful designed [Codepen](https://codepen.io/mithicher/pen/ojdXBa/) by Mithicher.
