import elementAppend from './polyfills/element-append'
import elementClosest from './polyfills/element-closest'
import elementGetBoundingRect from './polyfills/element-getboundingrect'
import elementMatches from './polyfills/element-matches'
import elementPrepend from './polyfills/element-prepend'
import elementRemove from './polyfills/element-remove'
import elementReplaceWith from './polyfills/element-replacewith'
import nodelistForEach from './polyfills/nodelist-foreach'

export const append = elementAppend
export const closest = elementClosest
export const getBoundingRect = elementGetBoundingRect
export const matches = elementMatches
export const prepend = elementPrepend
export const remove = elementRemove
export const replaceWith = elementReplaceWith
export const forEach = nodelistForEach

export default function () {
  elementAppend()
  elementClosest()
  elementGetBoundingRect()
  elementMatches()
  elementPrepend()
  elementRemove()
  elementReplaceWith()
  nodelistForEach()
}
