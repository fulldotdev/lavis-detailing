export function buildVariant(name: string) {
  return function (matcher: any) {
    if (!matcher.startsWith(`${name}:`)) return matcher
    return {
      matcher: matcher.slice(name.length + 1),
      selector: (s: string) => `${s}.${name}, .${name} ${name}`,
    }
  }
}
