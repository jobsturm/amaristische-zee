export const icons = {
  "castle-boat": () => import('../../assets/icons/castle-boat.svg?raw'),
  "bridge": () => import('../../assets/icons/bridge.svg?raw'),
  "castle-ruins": () => import('../../assets/icons/castle-ruins.svg?raw'),
  "hut": () => import('../../assets/icons/hut.svg?raw'),
  "castle-magic": () => import('../../assets/icons/castle-magic.svg?raw'),
  "castle-b": () => import('../../assets/icons/castle-b.svg?raw'),
  "pyramid": () => import('../../assets/icons/pyramid.svg?raw'),
  "castle-small": () => import('../../assets/icons/castle-small.svg?raw'),
  "village": () => import('../../assets/icons/village.svg?raw'),
  "castle-a": () => import('../../assets/icons/castle-a.svg?raw'),
  "castle-tower": () => import('../../assets/icons/castle-tower.svg?raw'),
  "cave": () => import('../../assets/icons/cave.svg?raw'),
  "chuch": () => import('../../assets/icons/chuch.svg?raw'),
} as const;

export type IconKeys = keyof typeof icons;