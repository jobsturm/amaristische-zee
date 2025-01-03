import { icons } from './icons-generated';

export type IconKeys = keyof typeof icons;

export function getIcon(path: IconKeys): Promise<string> {
    if (!icons[path]) {
        return Promise.reject(new Error(`Icon not found: ${String(path)}`));
    }
  
    return icons[path]().then((mod) => {
        return mod.default;
    });
}