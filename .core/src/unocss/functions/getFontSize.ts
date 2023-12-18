import getClamp from './getClamp'

const MIN = 12

export const getFontSizeModeRules = (settings: {
  scale: number
  small1: number
  small2: number
  small3: number
  medium1: number
  medium2: number
  medium3: number
  large1: number
  large2: number
  large3: number
}) => {
  function value(size: number) {
    const maxSize = size * settings.scale
    const minSize = size - (size - MIN) / 3
    return getClamp(minSize, maxSize)
  }
  return {
    '--un-theme-fontSize-small1': value(settings.small1),
    '--un-theme-fontSize-small2': value(settings.small2),
    '--un-theme-fontSize-small3': value(settings.small3),
    '--un-theme-fontSize-medium1': value(settings.medium1),
    '--un-theme-fontSize-medium2': value(settings.medium2),
    '--un-theme-fontSize-medium3': value(settings.medium3),
    '--un-theme-fontSize-large1': value(settings.large1),
    '--un-theme-fontSize-large2': value(settings.large2),
    '--un-theme-fontSize-large3': value(settings.large3),
  }
}

export const getFontSizeSizeRules = (size: 'small' | 'medium' | 'large') => ({
  '--un-theme-fontSize-size1': `var(--un-theme-fontSize-${size}1)`,
  '--un-theme-fontSize-size2': `var(--un-theme-fontSize-${size}2)`,
  '--un-theme-fontSize-size3': `var(--un-theme-fontSize-${size}3)`,
})

export const getFontSizeClasses = () => ({
  size1: 'var(--un-theme-fontSize-size1)',
  size2: 'var(--un-theme-fontSize-size2)',
  size3: 'var(--un-theme-fontSize-size3)',
})
