import { Eleventy } from '../../types';

export const data = {
  layout: 'base',
  title: 'Página Principal',
  lang: 'es'
};

export function render(data: Eleventy): string {
  return `
    <p>Hello world 3</p>
  `;
}