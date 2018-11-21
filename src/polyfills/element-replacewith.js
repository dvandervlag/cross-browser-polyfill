var ElementPrototype = window.Element.prototype
var DocumentTypePrototype = window.DocumentType.prototype
var CharacterDataPrototype = window.CharacterData.prototype

export default function () {
  // Polyfill Element prototypes to support replaceWith functionality.
  if (!ElementPrototype.replaceWith || !DocumentTypePrototype.replaceWith || !CharacterDataPrototype.replaceWith) {
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
}
