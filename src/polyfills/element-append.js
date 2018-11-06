var ElementPrototype = window.Element.prototype
var DocumentPrototype = window.Document.prototype
var DocumentFragmentPrototype = window.DocumentFragment.prototype

export default function () {
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
}
