/**
 * Shared formatting helpers.
 * Kept in one place so every card shows the date the same way.
 */

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

/** '2026-08-14' -> '14 Aug 2026' */
export function formatDate(isoDate) {
  if (!isoDate) return ''
  return dateFormatter.format(new Date(isoDate))
}
