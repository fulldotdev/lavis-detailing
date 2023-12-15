import flattenShortcut from './flattenShortcut'

export default function flattenShortcutObject(shortcuts) {
  return Object.entries(shortcuts).reduce((acc, [key, values]) => {
    const flattened = flattenShortcut(key, values)
    return { ...acc, ...flattened }
  }, {})
}
