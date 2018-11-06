var ElementPrototype = window.Element.prototype

export default function () {
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
}
