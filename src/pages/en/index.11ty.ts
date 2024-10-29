import { Eleventy } from '../../../types';

export const data = {
  layout: 'base',
  title: 'Home Page',
  lang: 'en'
};

export function render(data: Eleventy): string {
  return `
    <p></p>
  `;
}