var ElementPrototype = window.Element.prototype

export default function () {
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
}
