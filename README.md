# Welcome to the cross browser polyfill package
the Cross-browser-polyfill is a NPM package designed to provide more native support for features not currently supported by all modern browsers.

You can choose to polyfill all or a select number of features found in this package, allowing you to only support the features you want.

## Features & Usage
This package brings numerous functionality to the browser that may be missed during transpiling or when desired for smaller release packages.

### .append()
Append allows you to append elements and strings safely into the browser without causing large repaints or drastic node-tree changes.

**Example:**
`elementNode.append('<div class="my-custom-element"> My_string </div>')`

**Arguments:**
Strings, Template strings and Node elements are all valid arguments.

-----------------

### .closest()
Brings the closest functionality commonly found in ES6/Jquery to native none-supporting browsers. This is used to find the closest element.

**Example:**
`elementNode.closest('#myWrapper')`

**Arguments:**
All selector types are supported as valid arguments.

**Returns:**
This returns a node element with the closest match.

-----------------

### .getBoundingClientRect()
getBoundingClientRect brings more standardisation on the data you get when trying to finding the rect of a target element. It provides a singular interface and a common response object containing the .x and .y values. - This method takes no arguments.

**Example:**
`elementNode.getBoundingClientRect()`

**Returns:**
This will return an object:

-----------------

### .matches()
matches allows you to find an element that matches the exact selector you pass too it as an argument.

**Example:**
`elementNode.matches(MySelector)`

**Arguments:**
All selector types are supported as valid arguments.

**Returns:**
This returns a node element with the exact match of the selector.

-----------------

### .prepend()
prepend allows you to append an element or string safely to the beginning of a node element child list.

**Example:**
`elementNode.prepend(myElement)`

**Arguments:**
Strings, Template strings and Node elements are all valid arguments.

-----------------

### .replaceWith()

**Example:**
`elementNode.replaceWith()`

-----------------

### .forEach()

**Example:**
`elementNode.forEach()`

-----------------

### .remove()

**Example:**
`elementNode.remove()`

## Installing & initialising
You can install the package as you usually would through NPM or yarn. E.G:

`npm i --save cross-browser-polyfill`

Once it is installed you can import it into the root of your application, it it best advised to include this package and initialise it as soon as (but before) you will need it. This is usually one of the first things that should happen when your application is starting.

**Import and initialise all at once**
`import polyfill from 'cross-browser-polyfill'`
`polyfill()`

**Import them as separate methods:**  
You can also import and use each feature as and when you need it like so:

`import {elementAppend, elementClosest, elementGetBoundingRect, elementMatches, elementReplaceWith, nodelistForEach, nodelistRemove} from 'cross-browser-polyfill'`

Then initialise them as you need them like so:
`elementAppend()`
`elementClosest()`
`etc`

## disclaimer
**Warning** This package modifies and adds numerous native objects & methods into the browser. This may result in unintended side effects depending on what extensions, plugins or other 3rd party tools you are using. As well as browser updates that may happen in between updates of this package.  

We do what we can to ensure a safe and performant browsing experience, as well as try to assist where and when possible with the ever-evolving ecosystem and any problems or requests you may have. However we are not liable for any problems or damages caused by using this or any of our other packages.

## License
Code released under [the MIT license](https://github.com/dvandervlag/cross-browser-polyfill/blob/master/LICENSE).
