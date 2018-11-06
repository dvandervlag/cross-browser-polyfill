import elementAppend from './polyfills/element-append'
import elementClosest from './polyfills/element-closest'
import elementGetBoundingRect from './polyfills/element-getboundingrect'
import elementMatches from './polyfills/element-matches'
import elementReplaceWith from './polyfills/element-replacewith'
import nodelistForEach from './polyfills/nodelist-foreach'
import nodelistRemove from './polyfills/nodelist-remove'

module export elementAppend
module export elementClosest
module export elementGetBoundingRect
module export elementMatches
module export elementReplaceWith
module export nodelistForEach
module export nodelistRemove

module default function() {
  elementAppend()
  elementClosest()
  elementGetBoundingRect()
  elementMatches()
  elementReplaceWith()
  nodelistForEach()
  nodelistRemove()
}
