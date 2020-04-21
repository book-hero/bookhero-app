export const PERFORM_SEARCH = 'PERFORM_SEARCH'

export function performSearch (term) {
  return {
    type: PERFORM_SEARCH,
    term
  }
}
