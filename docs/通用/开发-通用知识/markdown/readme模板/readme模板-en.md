# 项目标题：优雅的readme模板

> 来自shields.io的开源信息等等[Static Badge | Shields.io](https://shields.io/badges)

[![img](https://img.shields.io/badge/try%20online-read.youdao.com-purple)](https://read.youdao.com/#/home)   [![img](https://img.shields.io/badge/license-Apache--2.0-yellow)](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/LICENSE)

[![img](https://img.shields.io/badge/follow-%40YDOpenSource-1DA1F2?logo=twitter&style={style})](https://twitter.com/YDopensource)

一个完整的像模像样的开源项目，这里是项目简介

## 📝 Table of Contents[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#table-of-contents)

- [Demo](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#demo)
- [Prerequisites](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#prerequisites)
- [Install](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#install)
- [Setup](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#libsetup)
- [Usages](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#usages)
- [Debug](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#debug)
- [CSS](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#css)
- [API](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#api)
- [Hooks](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#hooks)
- [Search Engine Optimization (SEO)](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#seo)
- [FAQ](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#faq)
- [Contributing](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#contributing)

## 🤯 Demo [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#demo)

Visit this site: [https://naughty-bose-ec1cfc.netlify.com](https://naughty-bose-ec1cfc.netlify.com/)

## ✅ Prerequisites [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#prerequisites)

The browser you are targeting need to have support of `WeakMap` and `String.prototype.includes`. If you need to support an older browser (like IE) you will need to include polyfill for `WeakMap` and `String.prototype.includes` (see https://github.com/zloirock/core-js for example).

Make also sure to inclue a pollyfill for [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) if you need to target IE and want to use IntersectionObserver: https://github.com/w3c/IntersectionObserver/tree/master/polyfill

## ⬇️ Install [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#install)

To install the package, just run:

| `1`  | `$ npm install ng-lazyload-image ` |
| ---- | ---------------------------------- |
|      |                                    |

or the following if you are using yarn

| `1`  | `$ yarn add ng-lazyload-image ` |
| ---- | ------------------------------- |
|      |                                 |

## 🛠 Setup [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#setup)

Include the library in your module (see [app.module.ts](https://github.com/tjoskar/ng-lazyload-image/blob/master/example/src/app/app.module.ts)):

| ` 1 2 3 4 5 6 7 8 9 10 11` | `import { NgModule } from '@angular/core'; import { BrowserModule } from '@angular/platform-browser'; import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it import { AppComponent } from './app.component'; @NgModule({  declarations: [AppComponent],  imports: [BrowserModule, LazyLoadImageModule], // <-- and include it  bootstrap: [AppComponent], }) export class MyAppModule {} ` |
| -------------------------- | ------------------------------------------------------------ |
|                            |                                                              |

### IntersectionObserver[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#intersectionobserver)

`ng-lazyload-image` is using a intersection observer by default so you don't need to do anything if you want to continue using the intersection observer as event emitter.

### Scroll listener[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#scroll-listener)

You can easily swtich from IntersectionObserver to scroll listener by using the `scrollHooks`:

| ` 1 2 3 4 5 6 7 8 9 10 11 12` | `import { NgModule } from '@angular/core'; import { BrowserModule } from '@angular/platform-browser'; import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image'; // <-- include ScrollHooks import { AppComponent } from './app.component'; @NgModule({  declarations: [AppComponent],  imports: [BrowserModule, LazyLoadImageModule],  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }], // <-- Declare that you want to use ScrollHooks  bootstrap: [AppComponent], }) export class MyAppModule {} ` |
| ----------------------------- | ------------------------------------------------------------ |
|                               |                                                              |

See [hooks](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#hooks) below for more information.

## 🖼 Usages [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#usages)

A simple usecase is to use a `img`-tag and give it the image to lazyload to `[lazyLoad]` and an optional default image to `[defaultImage]`. The default image will be shown while the "real" image is getting loaded.

Example:

| ` 1 2 3 4 5 6 7 8 9 10` | `import { Component } from '@angular/core'; @Component({  selector: 'image',  template: ` <img [defaultImage]="defaultImage" [lazyLoad]="image" /> `, }) class ImageComponent {  defaultImage = 'https://www.placecage.com/1000/1000';  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg'; } ` |
| ----------------------- | ------------------------------------------------------------ |
|                         |                                                              |

### Background images[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#background-images)

It also supports background images:

| `1 2 3 4 5 6 7 8` | `@Component({  selector: 'image',  template: ` <div [defaultImage]="defaultImage" [lazyLoad]="image"></div> `, }) class ImageComponent {  defaultImage = 'https://www.placecage.com/1000/1000';  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg'; } ` |
| ----------------- | ------------------------------------------------------------ |
|                   |                                                              |

### Responsive images[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#responsive-images)

If using responsive images in a plain `<img>` tag, you'll need to set the `useSrcset` attribute to `true`:

| `1 2 3 4 5 6 7 8 9` | `@Component({  selector: 'image',  template: ` <img [defaultImage]="defaultImage" [lazyLoad]="images" [useSrcset]="true" /> `, }) class ImageComponent {  defaultImage = 'https://www.placecage.com/1000/1000';  images = `https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg 700w,            https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg 1100w`; } ` |
| ------------------- | ------------------------------------------------------------ |
|                     |                                                              |

If using responsive images in a `<picture>` tag, set the default `<img>` tag as usual with `lazyLoad` etc. attributes.
You can use `attr.lazyLoad`, `attr.defaultImage` and `attr.errorImage` attributes for `<source>` elements.
There's no need to set `useSrcset` for `<source>` elements, as `srcset` is used by default.
A simple example for a `<picture>` tag:

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18` | `@Component({  selector: 'image',  template: `    <picture>      <source media="(min-width: {{ screen_lg }})" [attr.defaultImage]="defaultImage" [attr.lazyLoad]="image2" />      <source media="(min-width: {{ screen_md }})" [attr.defaultImage]="defaultImage" [attr.lazyLoad]="image3" />      <img [defaultImage]="defaultImage" [lazyLoad]="image1" />    </picture>  `, }) class ImageComponent {  screen_lg = '1200px';  screen_md = '992px';  defaultImage = 'https://www.placecage.com/1000/1000';  image1 = 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg';  image2 = 'https://images.unsplash.com/photo-1439931444800-9bcc83f804a6?fm=jpg';  image3 = 'https://images.unsplash.com/photo-1417128281290-30a42da46277?fm=jpg'; } ` |
| ----------------------------------------------- | ------------------------------------------------------------ |
|                                                 |                                                              |

### Loading image path async[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#loading-image-path-async)

You can load image async or change the url on the fly, eg.

| `1`  | `<img [lazyLoad]="image$ | async" /> ` |
| ---- | -------------------------------------- |
|      |                                        |

### Custom observable[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#custom-observable)

Sometimes you want to get more controll over when the we should check if the image is in viewport. `customObservable` let's you create your own observable.

This will change the functionality of *when* we chek if the image is in the viewport. It does not change the functionality of *how* to detect if an image is in the viewport or not. Meaning: if you are using IntersectionObserver (default), it is important that the obserer that you pass to `customObservable` will emit objects that looks like: `{ isIntersecting: boolean }`. You can change this behavior by implementing your own `isVisible` (see [hooks](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#hooks) below for more information).

If you are using the ScrollHooks-preset, you can just pass `customObservable` and the reset will be handle automatically.

| ` 1 2 3 4 5 6 7 8 9 10` | `import { merge, fromEvent } from 'rxjs' ... constructor() {  this.scroll$ = merge(    fromEvent(window, 'scroll'),    fromEvent(someDivRef, 'scroll')  ); } ` |
| ----------------------- | ------------------------------------------------------------ |
|                         |                                                              |

| `1`  | `<img [customObservable]="scroll$" ... /> ` |
| ---- | ------------------------------------------- |
|      |                                             |

### Ionic[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#ionic)

If you are using Ionic and **don't** want to use IntersectionObserver, you may need to include your own scroll observable or change the scroll target. For instans if you want to have multiple scroll targets:

| ` 1 2 3 4 5 6 7 8 9 10 11` | `@Component({  selector: 'page-image',  template: `    <ion-content #container padding>      <img [defaultImage]="https://www.placecage.com/1000/1000" [lazyLoad]="lazyLoadImage" [customObservable]="container.ionScroll" />    </ion-content>  `, }) export class AboutPage {  lazyLoadImage = 'https://hd.unsplash.com/photo-1431400445088-1750c997c6b5'; } ` |
| -------------------------- | ------------------------------------------------------------ |
|                            |                                                              |

In case of using ion-slides in Ionic 2+, you can include your own scroll observable as below.

| ` 1 2 3 4 5 6 7 8 9 10 11` | `@Component({  selector: 'page-image',  template: `    <ion-content #container padding>      <img [defaultImage]="https:  //www.placecage.com/1000/1000" [lazyLoad]="lazyLoadImage" [customObservable]="container.ionSlideWillChange" />    </ion-content>  `, }) export class AboutPage {  lazyLoadImage = 'https://hd.unsplash.com/photo-1431400445088-1750c997c6b5'; } ` |
| -------------------------- | ------------------------------------------------------------ |
|                            |                                                              |

## 🐛 Debug [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#debug)

In order to get a better understanding of what is happening you can pass `[debug]="true"` which will output some debug information in the web console.

See [onStateChange](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#onStateChange) for more information about the diffrent output messages.

## 💅 CSS [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#css)

The css class name `ng-lazyloading` will automatically be added before the image is loaded and will be removed when the image has been loaded or if the image couldn't be loaded.

The css class name `ng-lazyloaded` will be added when the image is loaded (regardless of if the image could be loaded or not).

The css class name `ng-failed-lazyloaded` will be added when the image couldn't be loaded.

## 🔄 API [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#api)

##### lazyLoad[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#lazyload)

Type: `string`

Example: `https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg`

The image to be lazy loaded. This image will replace the default image (`defaultImage`).

| `1`  | `<img [defaultImage]="'https://www.placecage.com/1000/1000'" [lazyLoad]="'https://hd.unsplash.com/photo-1431400445088-1750c997c6b5'" /> ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

##### defaultImage (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#defaultimage-optional)

Type: `string`

Example: `https://www.placecage.com/1000/1000`

Path to default image. This image will be loaded right away.

You can also use `src` attribute for img tag to define default image:
`<img src="https://www.placecage.com/1000/1000" [lazyLoad]="lazyLoadImage" />`

or `background-image` property for non-image tags:
`<div style="background-image: url('https://www.placecage.com/1000/1000');" [lazyLoad]="lazyLoadImage"></div>`

##### errorImage (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#errorimage-optional)

Type: `string`

Example: `https://i.imgur.com/XkU4Ajf.png`

An image to be loaded if failing to load `lazyLoad`. Will load the default image (`defaultImage`) if absent.

| `1`  | `<img [defaultImage]="someDefaultImage" [lazyLoad]="imageToLazyLoad" [errorImage]="imageToShowOnError" /> ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

##### offset (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#offset-optional)

Type: `number`

Example: `100`

Default: `0`

Number of px a image should be loaded before it is in view port

| `1`  | `<img [defaultImage]="someDefaultImage" [lazyLoad]="imageToLazyLoad" [offset]="100" /> ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

##### scrollTarget (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#scrolltarget-optional)

Type: `Element`

Example: `document.getElementById('my-scroll-container')`

Default: `window`

You will need to set this property if you are using a scroll container and do not propagate the scroll event to window.

##### customObservable (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#customobservable-optional)

Type: `Observable`

Example: `Observable.fromEvent(myScrollContainer, 'scroll')`

You can pass your own observable if you need more control over the flow. Can be useful if integrating with other frameworks like ionic. See [Custom Observable](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#custom-observable) for more information.

##### useSrcset (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#usesrcset-optional)

Type: `boolean`

Example: `true`

You can set this to `true` if you need to lazy load images with `srcset` attribute, instead of `src`.
`<source>` tags are set to use `srcset` by default, so you don't need to set this option additionaly.

##### decode (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#decode-optional)

Type: `boolean`

Example: `true`

You can set this to `true`, the image will be [decoded](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode) before inserted into the DOM. This can be useful for large images.

##### debug (optional)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#debug-optional)

type: `boolean`

Exaple: `true`

See [debug](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#debug) for more information.

### Events[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#events)

##### onStateChange (optional) [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#onstatechange-optional)

Type: `Function: (event: StateChange) => void`

Example: `<img [lazyLoad]="lazyLoadImage" (onStateChange)="myCallbackFunction($event)">`

You can pass a callback function, which will be called when the image is getting into different state.

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28` | `myCallbackFunction(event: StateChange) {  switch (event.reason) {    case 'setup':      // The lib has been instantiated but we have not done anything yet.      break;    case 'observer-emit':      // The image observer (intersection/scroll/custom observer) has emit a value so we      // should check if the image is in the viewport.      // `event.data` is the event in this case.      break;    case 'start-loading':      // The image is in the viewport so the image will start loading      break;    case 'mount-image':      // The image has been loaded successfully so lets put it into the DOM      break;    case 'loading-succeeded':      // The image has successfully been loaded and placed into the DOM      break;    case 'loading-failed':      // The image could not be loaded for some reason.      // `event.data` is the error in this case      break;    case 'finally':      // The last event before cleaning up      break;  } } ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

## 🎣 Hooks [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#hooks)

It is possible to hook into the loading process by create your own functions.

For example, let's say you want to fetch an image with some custom headers. If so, you can create a custom hook to fetch the image:

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24` | `import { NgModule } from '@angular/core'; import { BrowserModule } from '@angular/platform-browser'; import { LazyLoadImageModule, IntersectionObserverHooks, Attributes, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; import { AppComponent } from './app.component'; export class LazyLoadImageHooks extends IntersectionObserverHooks {  loadImage({ imagePath }: Attributes): Promise<string> {    return fetch(imagePath, {      headers: {        Authorization: 'Bearer ...',      },    })      .then((res) => res.blob())      .then((blob) => URL.createObjectURL(blob));  } } @NgModule({  declarations: [AppComponent],  imports: [BrowserModule, LazyLoadImageModule],  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],  bootstrap: [AppComponent], }) export class MyAppModule {} ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

You can even use other services by inject them. Lets say you want to use Angulars https class instead of `window.fetch`:

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30` | `import { NgModule, Injectable } from '@angular/core'; import { BrowserModule } from '@angular/platform-browser'; import { HttpClientModule, HttpClient } from '@angular/common/http'; import { LazyLoadImageModule, IntersectionObserverHooks, Attributes, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'; import { Observable } from 'rxjs'; import { map } from 'rxjs/operators'; import { AppComponent } from './app.component'; @Injectable() export class LazyLoadImageHooks extends IntersectionObserverHooks {  private http: HttpClient;   constructor(http: HttpClient) {    super();    this.http = http;  }   loadImage({ imagePath }: Attributes): Observable<string> {    // Load the image through `HttpClient` and cancel the request if the user change page or the image gets removed    return this.http.get(imagePath, { responseType: 'blob' }).pipe(map(blob => URL.createObjectURL(blob)));  } } @NgModule({  declarations: [AppComponent],  imports: [BrowserModule, HttpClientModule, LazyLoadImageModule],  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],  bootstrap: [AppComponent], }) export class MyAppModule {} ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

The following hooks are supported:

### getObservable[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#getobservable)

Should return an observable that emits a new value every time `ng-lazyload-image` should check if the image is in viewport. It is important that the emited event is of the same type `isVisible` expects.

Eg.

| `1 2 3 4 5 6 7 8 9` | `import { Attributes, IntersectionObserverHooks } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  getObservable(attributes: Attributes) {    // Will emit `{ isIntersecting: true }` every second.    // You will have to overwride `isVisible` if you want to pass another event    return interval(1000).pipe(mapTo({ isIntersecting: true })));  } } ` |
| ------------------- | ------------------------------------------------------------ |
|                     |                                                              |

A more usefull example could be to add a debounce time so we only start loading the image if it has been in the view port for some time:

| `1 2 3 4 5 6 7 8 9` | `import { Attributes, IntersectionObserverHooks } from 'ng-lazyload-image'; import { debounceTime } from 'rxjs/operators'; class LazyLoadImageHooks extends IntersectionObserverHooks {  getObservable(attributes: Attributes) {    // Only load the image if it has been in the viewport for one second    return super.getObservable(attributes).pipe(debounceTime(1000))  } } ` |
| ------------------- | ------------------------------------------------------------ |
|                     |                                                              |

See [intersection-listener.ts](https://github.com/tjoskar/ng-lazyload-image/blob/master/src/intersection-observer-hooks/hooks.ts) for example.

See `isVisible` if you want to use your own event.

### isVisible[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#isvisible)

Function to check if the element is vissible.

Eg.

| `1 2 3 4 5 6 7 8` | `import { Attributes, ScrollHooks } from 'ng-lazyload-image'; class LazyLoadImageHooks extends ScrollHooks {  isVisible(event: Event | string, { element, scrollContainer, offset }: Attributes) {    // `event` is form `getObservable`    return isElementInViewport(element, scrollContainer, offset);  } } ` |
| ----------------- | ------------------------------------------------------------ |
|                   |                                                              |

If you want to create your own event, you can create both `getObservable` and `isVisible` by extend `SharedHooks`:

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13` | `import { Attributes, SharedHooks } from 'ng-lazyload-image'; class LazyLoadImageHooks extends SharedHooks<number> {   getObservable(attributes: Attributes) {    return interval(1000);  }   isVisible(event: number, attributes: Attributes) {    // `event` is 0,1,2,3,4,5,...    return isElementInViewport(element, scrollContainer, offset);  } } ` |
| -------------------------------- | ------------------------------------------------------------ |
|                                  |                                                              |

### loadImage[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#loadimage)

Function to load the image. It must return a path to the image (it can however be async, like the example below and/or return a observable).

| `1 2 3 4 5 6 7 8 9` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  loadImage({ imagePath }: Attributes): Promise<string> {    return await fetch(imagePath)      .then((res) => res.blob())      .then((blob) => URL.createObjectURL(blob));  } } ` |
| ------------------- | ------------------------------------------------------------ |
|                     |                                                              |

If you don't want to load the image but instead let the browser load it for you, then you can just return the imagePath (We will however not know if the image can't be loaded and the error image will not be used):

| `1 2 3 4 5` | `class LazyLoadImageHooks extends IntersectionObserverHooks {  loadImage({ imagePath }: Attributes) {    return [imagePath];  } } ` |
| ----------- | ------------------------------------------------------------ |
|             |                                                              |

### setLoadedImage[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#setloadedimage)

A function to set the image url to the DOM.

Eg.

| `1 2 3 4 5 6 7 8` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  setLoadedImage({ element, imagePath }: Attributes) {    // `imagePath` comes from `loadImage`    element.src = imagePath;  } } ` |
| ----------------- | ------------------------------------------------------------ |
|                   |                                                              |

### setErrorImage[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#seterrorimage)

This function will be called if the lazy image cant be loaded.

Eg.

| `1 2 3 4 5 6 7` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  setErrorImage({ element, errorImagePath }: Attributes) {    element.src = errorImagePath;  } } ` |
| --------------- | ------------------------------------------------------------ |
|                 |                                                              |

### setup[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#setup_1)

This function will be called on setup. Can be useful for (re)setting css-classes and setting the default image.

This function will be called every time an attrebute is changing.

Eg.

| ` 1 2 3 4 5 6 7 8 9 10` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  setup(attributes: Attributes) {    // Overwride the path to the default image for all lazyloaded images    attributes.defaultImagePath = 'some/path.jpg';    // You can always call the base `setup` if you want to keep the default behavior    super.setup(attributes);  } } ` |
| ----------------------- | ------------------------------------------------------------ |
|                         |                                                              |

### finally[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#finally)

This function will be called on teardown. Can be useful for setting css-classes.

Eg.

| `1 2 3 4 5 6 7` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  finally(attributes: Attributes) {    // So something  } } ` |
| --------------- | ------------------------------------------------------------ |
|                 |                                                              |

### isBot[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#isbot)

A function to check if the current user is a bot or not. Can be useful for SSR and SEO.

Default function:

| ` 1 2 3 4 5 6 7 8 9 10` | `import { isPlatformServer } from '@angular/common'; import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  isBot(attributes?: Attributes) {    // Check if the user is a bot or not.    this.navigator; // Is the same as `window.navigator` if window is defined otherwise undefined.    isPlatformServer(this.platformId); // True if the code is running on the server  } } ` |
| ----------------------- | ------------------------------------------------------------ |
|                         |                                                              |

Both `IntersectionObserverHooks` and `ScrollHooks` will load the image as soon as possble if `isBot` returns `true`.

### isDisabled[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#isdisabled)

A function to decided if the module should be disabled, meaning: it should not do anything, just exit right away, without loading any image. The default behavior is to disable it on the server if the user is not a bot:

| `1 2 3 4 5 6 7 8 9` | `import { isPlatformServer } from '@angular/common'; import { IntersectionObserverHooks } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  isDisabled() {    // This is the same as: `return super.isDisabled();`    return isPlatformServer(this.platformId) && !this.isBot();  } } ` |
| ------------------- | ------------------------------------------------------------ |
|                     |                                                              |

### skipLazyLoading[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#skiplazyloading)

A function to decided if we should load the image right away. This can be useful if you want to skip to lazyload the image when SSR:

| `1 2 3 4 5 6 7 8` | `import { isPlatformServer } from '@angular/common'; import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  skipLazyLoading(attributes: Attributes) {    return isPlatformServer(this.platformId);   } } ` |
| ----------------- | ------------------------------------------------------------ |
|                   |                                                              |

Or maybe you want to load the image ASAP from specific domains

| `1 2 3 4 5 6 7 8` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  skipLazyLoading(attributes: Attributes) {    const imageUrl = new URL(attributes.imagePath);    return imageUrl.hostname === 'example.org';  } } ` |
| ----------------- | ------------------------------------------------------------ |
|                   |                                                              |

The default behavior for `skipLazyLoading` is to call `isBot`. Meaning: if the user is a bot, load the image right away, otherwise, lazyload the image.

### onAttributeChange[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#onattributechange)

This function is called when some of the atrebute of the image is changed.

| `1 2 3 4 5 6 7` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  onAttributeChange(newAttributes: Attributes) {    console.log(`New attributes: ${newAttributes}`);  } } ` |
| --------------- | ------------------------------------------------------------ |
|                 |                                                              |

### onDestroy[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#ondestroy)

This function is called when a image is loaded and the directive will unmount, aka. when `ngOnDestroy` is called in the directive. This can be useful if you want to do some cleanup.

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14` | `import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  imageToBeLoaded = new Map<string, Attributes>();   onAttributeChange(newAttributes: Attributes) {    console.log(`New attributes: ${newAttributes}`);    imageToBeLoaded.set(newAttributes.id, newAttributes);  }   onDestroy(attributes: Attributes) {    imageToBeLoaded.delete(attributes.id);  } } ` |
| ----------------------------------- | ------------------------------------------------------------ |
|                                     |                                                              |

## 🔎 Search Engine Optimization (SEO) [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#search-engine-optimization-seo)

`ng-lazyload-image` are using the following strategy by default:

### Server side rendering (SSR)[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#server-side-rendering-ssr)

If the incoming request is from a bot; it will set `[lazyLoad]` to `src` on the image (letting the browser loading the image right away). Useful if the bot don't understand javascript.

If the request is not from a bot (or if we can't decide), don't do anything and let the client fix the images (see below).

You can chang this behavior by implementing your own `skipLazyLoading` function (see `skipLazyLoading` above). Let's say you always want to show the image ASAP for SSR, regardles of if the user is a bot or not:

| `1 2 3 4 5 6 7 8 9` | `import { isPlatformServer } from '@angular/common'; import { IntersectionObserverHooks, Attributes } from 'ng-lazyload-image'; class LazyLoadImageHooks extends IntersectionObserverHooks {  skipLazyLoading(attributes: Attributes) {    // Skipping lazyloading the image for SSR    return isPlatformServer(this.platformId);   } } ` |
| ------------------- | ------------------------------------------------------------ |
|                     |                                                              |

### Client side[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#client-side)

- If the user is a bot (see `isBot` hook above), render all the images right away. (useful if the bot understand javascript)
- If the user is not a bot (or if we can't decide), lazy load the images

## 🤔 FAQ [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#faq)

**Q** How can I manually trigger the loading of images?

**A** You can either use the `getObservable` hook if you can trigger the loading outside the dom or you can use the `customObservable` input, see [Custom Observable](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#custom-observable)

**Q** Does this library work with ionic or some other wrapper for Angular?

**A** Yes, but ionic and some other library wraps the whole document inside an other div so you might need to create your own scroll listener.

**Q** How can I add a transition effect between the default image and the lazy loaded image?

**A** See: https://github.com/tjoskar/ng-lazyload-image/issues/300

**Q** It doesn't work with `BrowserAnimationsModule`

**A** Are you using the scroll preset? If so, take a look at this [issue](https://github.com/tjoskar/ng-lazyload-image/issues/438).

**Q** Can I add a debounce time before loading the image?

**A** Yes, take a look at this [issue](https://github.com/tjoskar/ng-lazyload-image/issues/456).

**Q** Can I cancel image loading when the user change page?

**A** Yes, take a look at this [issue](https://github.com/tjoskar/ng-lazyload-image/issues/458).

**Q** I can't get it to work. Can you help me?

**A** Sure, create an issue and describe your issue in as much detail as possible.

## 🙇‍ Contributing [¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/#contributing)

See the [contributing guide](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/README模板/readme_en/CONTRIBUTING.md)