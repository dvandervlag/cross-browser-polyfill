# Welcome to the cross browser polyfill package
the Cross-browser-polyfill is a NPM package designed to provide more native support for features not currently supported by all modern browsers.

You can choose to polyfill all or a select number of features found in this package, allowing you to only support the features you want.

## Features & Usage
This package brings numerous functionality to the browser that may be missed during transpiling or when desired for smaller release packages.

## Browser support

The polyfill has been tested in the following browsers:

* Chrome
* Firefox 3.5+
* Internet Explorer 11
* Microsoft Edge
* Safari 10+

### .append()
Append allows you to append elements and strings safely into the browser without causing large repaints or drastic node-tree changes.

**Example:**
```javascript
document.querySelector('body').append('<div class="my-custom-element"> My_string </div>')
```

**Arguments:**
Strings, Template strings and Node elements are all valid arguments.

-----------------

### .closest()
Brings the closest functionality commonly found in ES6/Jquery to native none-supporting browsers. This is used to find the closest element.

**Example:**
```javascript
document.querySelector('body').closest('#someElement')
```

**Arguments:**
All selector types are supported as valid arguments.

**Returns:**
This returns a node element with the closest match.

-----------------

### .getBoundingClientRect()
getBoundingClientRect brings more standardisation on the data you get when trying to finding the rect of a target element. It provides a singular interface and a common response object containing the .x and .y values. - This method takes no arguments.

**Example:**
```javascript
document.querySelector('body').getBoundingClientRect()
```

**Returns:**
This will return an object

-----------------

### .matches()
matches allows you to find an element that matches the exact selector you pass too it as an argument.

**Example:**
```javascript
document.querySelector('body').matches('.root')
```

**Arguments:**
All selector types are supported as valid arguments.

**Returns:**
This returns a node element with the exact match of the selector.

-----------------

### .prepend()
prepend allows you to append an element or string safely to the beginning of a node element child list.

**Example:**
```javascript
var parent = document.createElement("div");
parent.innerHTML = "prepend() works.";
parent.prepend("This is how ");

console.log(parent.textContent);
```

**Arguments:**
Strings, Template strings and Node elements are all valid arguments.

-----------------

### .remove()
```javascript
  var element = document.querySelector('#someElement')
  element.remove()
```

**Example:**
`elementNode.remove()`

-----------------

### .replaceWith() 
replaceWith replaces a ChildNode in the children list of its parent with a set of Node or DOMString objects. 

**Example:**
```javascript
var parent = document.createElement("div");
var child = document.createElement("p");
parent.appendChild(child);
var span = document.createElement("span");

child.replaceWith(span);

console.log(parent.outerHTML);
```

**Arguments**
DOMString objects and Text nodes are valid arguments.

-----------------

### .forEach()
forEach calls the callback given in parameter once for each value pair in the list, in insertion order.

**Example:**
```javascript
document.querySelectorAll('div').forEach((button, i) => {
  console.log(`Element ${button} is a div inside this document with index ${i}`);
});
```

**Arguments**
A callback function.

## Installing & initialising
You can install the package as you usually would through NPM or yarn. E.G:

`npm i --save cross-browser-polyfill`

Once it is installed you can import it into the root of your application, it it best advised to include this package and initialise it as soon as (but before) you will need it. This is usually one of the first things that should happen when your application is starting.

**Import and initialise all at once**
```javascript
import polyfill from 'cross-browser-polyfill'
polyfill()
```

**Import them as separate methods:**  
You can also import and use each feature as and when you need it like so:

```javascript
import {
  append, 
  closest, 
  getBoundingRect, 
  matches, 
  prepend,
  remove, 
  replaceWith, 
  forEach
} from 'cross-browser-polyfill'
```

Then initialise them as you need them like so:
```javascript
elementAppend()
elementClosest()
etc..
```

## Authors
This polyfill was written by [Dennis van der Vlag](https://github.com/dvandervlag) and contributed by [Scott Jones](https://github.com/thedanzor).

## disclaimer
**Warning** This package modifies and adds numerous native objects & methods into the browser. This may result in unintended side effects depending on what extensions, plugins or other 3rd party tools you are using. As well as browser updates that may happen in between updates of this package.  

We do what we can to ensure a safe and performant browsing experience, as well as try to assist where and when possible with the ever-evolving ecosystem and any problems or requests you may have. However we are not liable for any problems or damages caused by using this or any of our other packages.

## License
Code released under [the MIT license](https://github.com/dvandervlag/cross-browser-polyfill/blob/master/LICENSE).
