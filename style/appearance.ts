export const appearance = {
  radius: {
    base: '6px',
    large: '10px',
    pill: '50000px',
    circle: '50%',
  },
  index: {
    floor: 0,
    low: 1,
    medium: 2,
    high: 3,
    highest: 4,
  },
  borderWidth: {
    regular: '1px',
    thick: '2px',
  },
  textShadow: {
    subtle: '0 0 0.03em rgba(0, 0, 0, 0.5)',
    heavy: '0 0 1em rgba(0, 0, 0.6)',
  },
}

export const spring = {
  bounce: {
    type: 'spring',
    stiffness: 260,
    damping: 15,
  },
  softOut: {
    type: 'spring',
    stiffness: 100,
    damping: 30,
  },
}
