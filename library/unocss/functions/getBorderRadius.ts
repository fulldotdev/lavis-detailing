import getClamp from './getClamp'

export const getBorderRadiusModeRules = ({
  scale,
  rounded,
  multiplier,
}: {
  scale: number
  rounded: string
  multiplier: number
}) => {
  const value = (sizeMultiplier: number, power: number) => {
    const baseMap = {
      none: 0,
      tiny: 2,
      small: 4,
      medium: 8,
      large: 12,
    }
    const base = sizeMultiplier * baseMap[rounded]
    const size = base * Math.pow(multiplier, power) * scale
    const minSize = size - (size - base) / 3
    return getClamp(minSize, size)
  }

  return {
    '--un-theme-borderRadius-small1': value(0.75, 0),
    '--un-theme-borderRadius-small2': value(0.75, 1),
    '--un-theme-borderRadius-small3': value(0.75, 2),
    '--un-theme-borderRadius-medium1': value(1, 0),
    '--un-theme-borderRadius-medium2': value(1, 1),
    '--un-theme-borderRadius-medium3': value(1, 2),
    '--un-theme-borderRadius-large1': value(1.25, 0),
    '--un-theme-borderRadius-large2': value(1.25, 1),
    '--un-theme-borderRadius-large3': value(1.25, 2),
  }
}

export const getBorderRadiusSizeRules = (
  size: 'small' | 'medium' | 'large'
) => ({
  '--un-theme-borderRadius-size1': `var(--un-theme-borderRadius-${size}1)`,
  '--un-theme-borderRadius-size2': `var(--un-theme-borderRadius-${size}2)`,
  '--un-theme-borderRadius-size3': `var(--un-theme-borderRadius-${size}3)`,
})

export const getBorderRadiusClasses = () => ({
  size1: 'var(--un-theme-borderRadius-size1)',
  size2: 'var(--un-theme-borderRadius-size2)',
  size3: 'var(--un-theme-borderRadius-size3)',
})
