import { Eleventy } from '../../../types';

export default function(data: Eleventy): string {
  return `
<header>
  <h1>${data.title}</h1>
</header>
  `;
}