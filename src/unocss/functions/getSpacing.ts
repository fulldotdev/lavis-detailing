import getClamp from './getClamp'

export const getSpacingModeRules = ({
  scale,
  multiplier,
}: {
  scale: number
  multiplier: number
}) => {
  const value = (start: number, power: number) => {
    const size = start * Math.pow(multiplier, power) * scale
    const minSize = size / 2
    return getClamp(minSize, size)
  }

  return {
    '--un-theme-spacing-small1': value(3, 0),
    '--un-theme-spacing-small2': value(3, 1),
    '--un-theme-spacing-small3': value(3, 2),
    '--un-theme-spacing-small4': value(3, 3),
    '--un-theme-spacing-small5': value(3, 4),
    '--un-theme-spacing-small6': value(3, 5),
    '--un-theme-spacing-medium1': value(4, 0),
    '--un-theme-spacing-medium2': value(4, 1),
    '--un-theme-spacing-medium3': value(4, 2),
    '--un-theme-spacing-medium4': value(4, 3),
    '--un-theme-spacing-medium5': value(4, 4),
    '--un-theme-spacing-medium6': value(4, 5),
    '--un-theme-spacing-large1': value(5, 0),
    '--un-theme-spacing-large2': value(5, 1),
    '--un-theme-spacing-large3': value(5, 2),
    '--un-theme-spacing-large4': value(5, 3),
    '--un-theme-spacing-large5': value(5, 4),
    '--un-theme-spacing-large6': value(5, 5),
  }
}

export const getSpacingSizeRules = (size: 'small' | 'medium' | 'large') => ({
  '--un-theme-spacing-size1': `var(--un-theme-spacing-${size}1)`,
  '--un-theme-spacing-size2': `var(--un-theme-spacing-${size}2)`,
  '--un-theme-spacing-size3': `var(--un-theme-spacing-${size}3)`,
  '--un-theme-spacing-size4': `var(--un-theme-spacing-${size}4)`,
  '--un-theme-spacing-size5': `var(--un-theme-spacing-${size}5)`,
  '--un-theme-spacing-size6': `var(--un-theme-spacing-${size}6)`,
})

export const getSpacingClasses = () => ({
  size1: 'var(--un-theme-spacing-size1)',
  size2: 'var(--un-theme-spacing-size2)',
  size3: 'var(--un-theme-spacing-size3)',
  size4: 'var(--un-theme-spacing-size4)',
  size5: 'var(--un-theme-spacing-size5)',
  size6: 'var(--un-theme-spacing-size6)',
})
