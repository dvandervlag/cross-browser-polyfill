var NodeListPrototype = window.NodeList.prototype

export default function () {
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
}
