export const containerWidths = {
  wide: 1362,
  widest: 1536,
};

export const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  wide: containerWidths.wide + 64,
  widest: containerWidths.widest + 64,
};

const THEME_1_PROPERTY = '--theme-1';
const THEME_2_PROPERTY = '--theme-2';
const THEME_3_PROPERTY = '--theme-3';
const THEME_4_PROPERTY = '--theme-4';
const THEME_5_PROPERTY = '--theme-5';

export const colorSlateDark = {
  1: 'oklch(15% 0.01 234 / <alpha-value>)',
  2: 'oklch(20% 0.004 234 / <alpha-value>)',
  3: 'oklch(25% 0.006 234 / <alpha-value>)',
  4: 'oklch(28% 0.007 234 / <alpha-value>)',
  5: 'oklch(31% 0.008 234 / <alpha-value>)',
  6: 'oklch(34% 0.01 234 / <alpha-value>)',
  7: 'oklch(39% 0.012 234 / <alpha-value>)',
  8: 'oklch(48% 0.016 234 / <alpha-value>)',
  9: 'oklch(53% 0.015 234 / <alpha-value>)',
  10: 'oklch(65% 0.014 234 / <alpha-value>)',
  11: 'oklch(75% 0.01 234 / <alpha-value>)',
  12: 'oklch(96% 0.003 234 / <alpha-value>)',
};

export const colorSlateLight = {
  1: 'oklch(99.12% 0.001 286.37 / <alpha-value>)',
  2: 'oklch(98.24% 0.003 286.35 / <alpha-value>)',
  3: 'oklch(95.57% 0.004 281.88 / <alpha-value>)',
  4: 'oklch(93.14% 0.006 282.96 / <alpha-value>)',
  5: 'oklch(91.01% 0.008 283.59 / <alpha-value>)',
  6: 'oklch(88.76% 0.009 281.79 / <alpha-value>)',
  7: 'oklch(85.34% 0.012 280.85 / <alpha-value>)',
  8: 'oklch(79.39% 0.016 278.12 / <alpha-value>)',
  9: 'oklch(64.56% 0.016 277.83 / <alpha-value>)',
  10: 'oklch(60.98% 0.016 273.24 / <alpha-value>)',
  11: 'oklch(50.26% 0.014 263.44 / <alpha-value>)',
  12: 'oklch(24.13% 0.01 249.52 / <alpha-value>)',
};

export const colorProject = {
  radix: {
    1: 'oklch(58% 0.1357 167.82 / <alpha-value>)',
    2: 'oklch(64% 0.1357 167.82 / <alpha-value>)',
    3: 'oklch(86% 0.1357 167.82 / <alpha-value>)',
    4: 'oklch(86% 0.1357 167.82 / <alpha-value>)',
    5: 'oklch(86% 0.1357 167.82 / <alpha-value>)',
  },
  aragon: {
    1: 'oklch(66.91% 0.16 229 / <alpha-value>)',
    2: 'oklch(73% 0.16 229 / <alpha-value>)',
    3: 'oklch(75% 0.145 203.08 / <alpha-value>)',
    4: 'oklch(80% 0.14 200 / <alpha-value>)',
    5: 'oklch(86% 0.14 200 / <alpha-value>)',
  },
  blocks: {
    1: 'oklch(58.69% 0.170 34.02 / <alpha-value>)',
    2: 'oklch(68% 0.170 34.02 / <alpha-value>)',
    3: 'oklch(72% 0.12 50.07 / <alpha-value>)',
    4: 'oklch(80% 0.1 40 / <alpha-value>)',
    5: 'oklch(90% 0.1 40 / <alpha-value>)',
  },
  dash: {
    1: 'oklch(38.68% 0.205 293.11 / <alpha-value>)',
    2: 'oklch(38.68% 0.205 293.11 / <alpha-value>)',
    3: 'oklch(51.91% 0.269 313 / <alpha-value>)',
    4: 'oklch(80% 0.25 300 / <alpha-value>)',
    5: 'oklch(90% 0.25 300 / <alpha-value>)',
  },
};

export const colorSocial = {
  dribbble: 'oklch(65.15% 0.199 0.71 / <alpha-value>)',
  github: 'oklch(50.41% 0.2 293.28 / <alpha-value>)',
  instagram: 'oklch(63.94% 0.25570451770931313 9.59921907261208 / <alpha-value>)',
  twitter: 'oklch(70.28% 0.149 235.06 / <alpha-value>)',
  linkedin: 'oklch(54.58% 0.13 242.27 / <alpha-value>)',
};

export function getColorSlateDark(step: keyof typeof colorSlateDark, alpha = 1) {
  const colorStep = colorSlateDark[step];
  return colorStep.replace('<alpha-value>', String(alpha));
}

export function getColorSlateLight(step: keyof typeof colorSlateLight, alpha = 1) {
  const colorStep = colorSlateLight[step];
  return colorStep.replace('<alpha-value>', String(alpha));
}

export function getColorProject(
  project: keyof typeof colorProject,
  tone: keyof (typeof colorProject)[keyof typeof colorProject],
  alpha = 1,
) {
  const colorStep = colorProject[project][tone];
  return colorStep.replace('<alpha-value>', String(alpha));
}

export function getColorSocial(platform: keyof typeof colorSocial, alpha = 1) {
  const color = colorSocial[platform];
  return color.replace('<alpha-value>', String(alpha));
}

export const getThemeColorValues = (projectId?: keyof typeof colorProject) => {
  return {
    [THEME_1_PROPERTY]: projectId ? getColorProject(projectId, 1) : getColorSlateDark(10),
    [THEME_2_PROPERTY]: projectId ? getColorProject(projectId, 2) : getColorSlateDark(11),
    [THEME_3_PROPERTY]: projectId ? getColorProject(projectId, 3) : getColorSlateDark(12),
    [THEME_4_PROPERTY]: projectId ? getColorProject(projectId, 4) : getColorSlateDark(12),
    [THEME_5_PROPERTY]: projectId ? getColorProject(projectId, 5) : getColorSlateDark(12),
  } as React.CSSProperties;
};

export const colorTheme = {
  1: `var(${THEME_1_PROPERTY})`,
  2: `var(${THEME_2_PROPERTY})`,
  3: `var(${THEME_3_PROPERTY})`,
  4: `var(${THEME_4_PROPERTY})`,
  5: `var(${THEME_5_PROPERTY})`,
};
