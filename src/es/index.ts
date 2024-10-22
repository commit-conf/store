import { Eleventy } from '../../types';
import i18n from '../_includes/i18n';

export const data = {
  layout: 'base',
  title: 'Página Principal',
  lang: 'es'
};

export default function(data: Eleventy): string {
  return `
    <p>${i18n[data.lang].welcome}</p>
  `;
}