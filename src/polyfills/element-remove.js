var NodeListPrototype = window.NodeList.prototype
var HTMLCollectionPrototype = window.HTMLCollection.prototype

var CharacterDataPrototype = window.CharacterData.prototype
var DocumentTypePrototype = window.DocumentType.prototype
var ElementPrototype = window.Element.prototype

export default function () {
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

  if (!ElementPrototype.remove || !CharacterDataPrototype.remove || !DocumentTypePrototype.remove) {
    CharacterDataPrototype.remove = DocumentTypePrototype.remove = ElementPrototype.remove = function () {
      if (this.parentNode !== null) {
        this.parentNode.removeChild(this)
      }
    }
  }
}
