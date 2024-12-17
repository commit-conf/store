import Splide from '@splidejs/splide';

Splide.defaults = {
  i18n: {
    prev: 'Foto anterior',
    next: 'Siguiente foto',
    slideX: 'Ir a la foto %s',
    first: 'Ir a la primera foto',
    last: 'Ir a la última foto',
    pageX: 'Ir a la página %s',
    play: 'Empezar reproducción',
    pause: 'Pausar reproducción',
    select: 'Elige una foto para mostrar',
  },
  keyboard: true,
  wheel: true,
  omitEnd: true,
  updateOnMove: true,
  live: true
}

const elms = document.getElementsByClassName( 'splide' );
Array.from( elms ).forEach( elm => {
  new Splide( elm as HTMLElement).mount();
})