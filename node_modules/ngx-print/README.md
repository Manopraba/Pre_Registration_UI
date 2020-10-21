
# ngx-print : *plug n' play Angular (2++) directive to print your stuff*
This directive makes printing your HTML sections smooth and easy in your Angular application. It is inspired from the old [AngularJS ngPrint](https://github.com/gilf/ngPrint) directive, thus it is intendend to be used with the new Angular -2/4/5/6/7-... ***Enjoy ! contributions are so welcomed :)***

## Setup

 **1-** In your root application folder run:
```bash
$ npm install ngx-print
```

 **2-** Once `ngx-print` is installed, you need to import the main module `NgxPrintModule` :

   ```js
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  ...
  imports: [NgxPrintModule, ...],
  ...
})
export class YourAppModule {
}
```

 **3-** Then plug n' play with it: 

 - Assuming you want to print the following HTML section:

```html
<div>
  <!--Your html stuff that you want to print-->
</div>
<button>print</button> <!--Your relevant print button-->

```

 - Now, what you have to do is tagging your *wanted-to-print* section by an `id` attribute, then link that `id` to a directive parameter in your button :

```html
 <!--
   1)- Add an ID here
 -->
<div id="print-section"> 
  <!--Your html stuff that you want to print-->
</div>

 <!--
   2)- Add the directive name in your button (ngxPrint),
   3)- Affect your ID to printSectionId
 -->
<button printSectionId="print-section" ngxPrint>print</button> 

```
## Optional properties

- You want a customized title for your printing window ? you have the choice by adding a new attribute to your print button `printTitle`:


```html

<div  id="print-section">

<!-- ... -->

</div>

<button  
	printTitle="MyTitle"  
	printSectionId="print-section"  
	ngxPrint>print</button>

```

  
- Also, if you want to customize the printing window style sheet (CSS) ? Hence you can do so by adding infinite styles to another attribute called `printStyle`:

  
```html

<div  id="print-section">

<!-- ... -->

</div>

<button
	[printStyle]="{h1 : {'color': 'red'}, h2 : {'border': 'solid 1px'}}"
	printSectionId="print-section"
	ngxPrint>print</button>

```

Here some simple styles were added to every `h1` & `h2` tags within the `div` where `print-section` is tagged to its `id` attribute.

## TODO
* Disable the print button once the popped window is opened
* Write tests
* ...
