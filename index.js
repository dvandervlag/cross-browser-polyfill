var NodeListPrototype = window.NodeList.prototype
var ElementPrototype = window.Element.prototype
var HTMLCollectionPrototype = window.HTMLCollection.prototype
var DocumentPrototype = window.Document.prototype
var DocumentFragmentPrototype = window.DocumentFragment.prototype
var DocumentTypePrototype = window.DocumentType.prototype
var CharacterDataPrototype = window.CharacterData.prototype

// Polyfill Nodelist prototype to always include the foreach method.
if (/MSIE|Trident/.test(navigator.userAgent)) {
  if (!NodeListPrototype.forEach) {
    NodeListPrototype.forEach = function (callback, selector) {
      selector = selector || window
      for (var i = 0; i < this.length; i++) {
        callback.call(selector, this[i], i, this)
      }
    }
  }
}

// Polyfill DOM element remove functionality.
if (!NodeListPrototype.remove || !HTMLCollectionPrototype.remove) {
  NodeListPrototype.remove = HTMLCollectionPrototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
      if (this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i])
      }
    }
  }
}

/**
 * This polyfills the difference between DOMRect (Used in Chrome and Firefox)
 * and ClientRect (Used in Safari, IE, Edge etc.);
 *
 * The difference between DOMRect and ClientRect is that the ClientRect does not
 * have the 'x' and 'y' properties, where the DOMRect does hold these values.
 */
ElementPrototype.innerGetBoundingClientRect = ElementPrototype.getBoundingClientRect
ElementPrototype.getBoundingClientRect = function () {
  var boundingClientRect = ElementPrototype.innerGetBoundingClientRect.call(this)

  if (!boundingClientRect.x) {
    // The rect we're returning is a ClientRect and not a DOMRect.
    boundingClientRect.x = boundingClientRect.left
    boundingClientRect.y = boundingClientRect.top
  }
  return boundingClientRect
}

// Polyfill DOM element remove functionality.
if (!ElementPrototype.remove) {
  ElementPrototype.remove = function () {
    if (this.parentElement !== null) {
      this.parentElement.removeChild(this)
    } else {
      this.innerHTML = ''
    }
  }
}

// Polyfill Element prototype to support matches functionality.
if (!ElementPrototype.matches) {
  ElementPrototype.matches =
    ElementPrototype.msMatchesSelector ||
    ElementPrototype.mozMatchesSelector ||
    ElementPrototype.webkitMatchesSelector ||
    function (selector) {
      var elements = (this.document || this.ownerDocument).querySelectorAll(selector)

      var index = 0
      while (elements[index] && elements[index] !== this) {
        ++index
      }
      return Boolean(elements[index])
    }
}

// Polyfill Element prototype to support closest functionality.
if (!ElementPrototype.closest) {
  ElementPrototype.closest = function (selector) {
    var element = this

    while (element && element.nodeType === 1) {
      if (element.matches(selector)) {
        return element
      }
      element = element.parentNode
    }
    return null
  }
}

// Polyfill Element prototype to support append functionality.
if (!ElementPrototype.append || !DocumentPrototype.append || DocumentFragmentPrototype.append) {
  ElementPrototype.append = DocumentPrototype.append = DocumentFragmentPrototype.append = function () {
    var argArr = window.Array.prototype.slice.call(arguments)
    var docFrag = window.document.createDocumentFragment()

    argArr.forEach(function (argItem) {
      var isNode = argItem instanceof window.Node
      docFrag.appendChild(isNode
        ? argItem
        : document.createTextNode(window.String(argItem))
      )
    })
    this.appendChild(docFrag)
  }
}

// Polyfill Element prototype to support prepend functionality.
if (!ElementPrototype.prepend || DocumentPrototype.prepend || DocumentFragmentPrototype.prepend) {
  ElementPrototype.prepend = DocumentPrototype.prepend = DocumentFragmentPrototype.prepend = function () {
    var argArr = window.Array.prototype.slice.call(arguments)
    var docFrag = window.document.createDocumentFragment()

    argArr.forEach(function (argItem) {
      var isNode = argItem instanceof window.Node
      docFrag.appendChild(isNode
        ? argItem
        : document.createTextNode(window.String(argItem))
      )
    })
    this.insertBefore(docFrag, this.firstChild)
  }
}

// Polyfill Element prototypes to support replaceWith functionality.
if (!ElementPrototype.replaceWith || DocumentTypePrototype.replaceWith || CharacterDataPrototype.replaceWith) {
  ElementPrototype.replaceWith = DocumentTypePrototype.replaceWith = CharacterDataPrototype.replaceWith = function () {
    var parent = this.parentNode
    var i = arguments.length
    var currentNode

    if (!parent) {
      return
    }

    if (!i) {
      parent.removeChild(this)
    }

    while (i--) {
      currentNode = arguments[i]

      if (typeof currentNode !== 'object') {
        currentNode = this.ownerDocument.createTextNode(currentNode)
      } else if (currentNode.parentNode) {
        currentNode.parentNode.removeChild(currentNode)
      }

      if (!i) {
        parent.replaceChild(currentNode, this)
      } else {
        parent.insertBefore(this.previousSibling, currentNode)
      }
    }
  }
}
