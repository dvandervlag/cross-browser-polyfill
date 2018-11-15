var NodeListPrototype = window.NodeList.prototype
var HTMLCollectionPrototype = window.HTMLCollection.prototype
var ElementPrototype = window.Element.prototype

export default function () {
  // Polyfill DOM element remove functionality.
  if (!NodeListPrototype.remove || !HTMLCollectionPrototype.remove || ElementPrototype.remove) {
    NodeListPrototype.remove = HTMLCollectionPrototype.remove = ElementPrototype.remove = function () {
      for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i])
        }
      }
    }
  }
}
