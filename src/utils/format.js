const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export function formatDate(isoDate) {
  if (!isoDate) return ''
  return dateFormatter.format(new Date(isoDate))
}
