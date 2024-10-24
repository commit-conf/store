import { Eleventy } from '../../../types';
import i18n from '../../_includes/i18n/index.11ty';

export const data = {
  layout: 'base',
  title: 'Página Principal',
  lang: 'es'
};

export function render(data: Eleventy): string {
  return `
    <p>${i18n[data.lang].welcome}</p>
  `;
}