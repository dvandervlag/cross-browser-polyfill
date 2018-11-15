var ElementPrototype = window.Element.prototype

export default function () {
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
}
