import type { Settings } from '@types'
import type { Preset } from 'unocss'
import { buildVariant } from './functions/buildVariant'
import {
  getBorderRadiusClasses,
  getBorderRadiusModeRules,
  getBorderRadiusSizeRules,
} from './functions/getBorderRadius'
import getClamp from './functions/getClamp'
import {
  getFontSizeClasses,
  getFontSizeModeRules,
  getFontSizeSizeRules,
} from './functions/getFontSize'
import {
  getSpacingClasses,
  getSpacingModeRules,
  getSpacingSizeRules,
} from './functions/getSpacing'

export default function preset({
  scale,
  rounded,
}: Settings['theme']['sizes']): Preset {
  return {
    name: 'unocss-preset-sizes',
    safelist: [
      'mode-base',
      'mode-compact',
      'size-small',
      'size-medium',
      'size-large',
    ],
    rules: [
      [
        'mode-compact',
        {
          ...getFontSizeModeRules({
            scale,
            small1: 12,
            small2: 14,
            small3: 16,
            medium1: 14,
            medium2: 16,
            medium3: 19,
            large1: 16,
            large2: 18,
            large3: 22,
          }),
          ...getSpacingModeRules({
            scale,
            multiplier: 1.5,
          }),
          ...getBorderRadiusModeRules({
            scale,
            rounded,
            multiplier: 1.5,
          }),
        },
      ],
      [
        'mode-base',
        {
          ...getFontSizeModeRules({
            scale,
            small1: 12,
            small2: 16,
            small3: 24,
            medium1: 14,
            medium2: 18,
            medium3: 32,
            large1: 16,
            large2: 20,
            large3: 54,
          }),
          ...getSpacingModeRules({
            scale,
            multiplier: 2,
          }),
          ...getBorderRadiusModeRules({
            scale,
            rounded,
            multiplier: 2,
          }),
        },
      ],
      [
        'size-small',
        {
          ...getFontSizeSizeRules('small'),
          ...getSpacingSizeRules('small'),
          ...getBorderRadiusSizeRules('small'),
        },
      ],
      [
        'size-medium',
        {
          ...getFontSizeSizeRules('medium'),
          ...getSpacingSizeRules('medium'),
          ...getBorderRadiusSizeRules('medium'),
        },
      ],
      [
        'size-large',
        {
          ...getFontSizeSizeRules('large'),
          ...getSpacingSizeRules('large'),
          ...getBorderRadiusSizeRules('large'),
        },
      ],
    ],
    theme: {
      fontSize: {
        ...getFontSizeClasses(),
      },
      spacing: {
        ...getSpacingClasses(),
        wrapper: `max(((100vw - 1536px) / 2), ${getClamp(12, 48)})`,
      },
      borderRadius: {
        ...getBorderRadiusClasses(),
      },
    },
    preflights: [
      {
        getCSS: ({ theme }) => `
          p, ul, ol, li, label {
            font-size: ${theme['fontSize'].size2};
          }
          h1, h2, h3, h4, h5, h6 {
            font-size: ${theme['fontSize'].size3};
          }
        `,
      },
    ],
    variants: [
      buildVariant('mode-base'),
      buildVariant('mode-compact'),
      buildVariant('size-small'),
      buildVariant('size-medium'),
      buildVariant('size-large'),
    ],
  }
}
