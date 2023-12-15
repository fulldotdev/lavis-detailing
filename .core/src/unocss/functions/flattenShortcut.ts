export default function flattenShortcut(name, shortcut) {
  return Object.entries(shortcut).reduce((acc, [key, value]) => {
    acc[`${name}-${key}`] = value
    return acc
  }, {})
}
