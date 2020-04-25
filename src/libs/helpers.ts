import * as R from 'ramda'

// mapMaybe :: (a -> b) -> [a] -> Maybe [b]
function $mapMaybe<A, B> (fn: A, list: B): B[] | null {
  const result = R.map(fn, list)
  return result === [] ? null : result
}

export const mapMaybe = R.curry($mapMaybe)
export const indexedMap = R.addIndex(R.map)
