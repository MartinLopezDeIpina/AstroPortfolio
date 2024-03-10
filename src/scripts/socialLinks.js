let socialLinks = document.querySelectorAll('.socialLink');

socialLinks.forEach((socialLink) => {

  let marginTop = 17;

  let originalTop = socialLink.getBoundingClientRect().top + window.scrollY;
  let originalLeft = socialLink.getBoundingClientRect().left + window.scrollX;

  let estiloSocialLink = window.getComputedStyle(socialLink);
  let offset = estiloSocialLink.getPropertyValue('--offset');
  if(offset == 2){ // en caso de que sea linkedin habrá que añadirle un 50% más de left 
                   //porque está puesto en el CSS con la propiedad transform y no tiene en cuenta el left
    originalLeft = originalLeft + socialLink.offsetWidth/2;
  }

  let container = document.querySelector('.divFotoSocialLinks');
  let topContainer = container.getBoundingClientRect().top + window.scrollY;
  let leftContainer = container.getBoundingClientRect().left + window.scrollX;

  //si al principio ya está arriba del 0, ponerlo en el 0
  if(socialLink.getBoundingClientRect().top < marginTop){
      socialLink.style.position = 'fixed';
      socialLink.style.top = `${marginTop}px`;
      socialLink.style.left = originalLeft + 'px'; // Mantén el eje X
  }

  window.addEventListener('scroll', function() {
    var scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition > originalTop-marginTop) { 
      socialLink.style.position = 'fixed';
      socialLink.style.top = `${marginTop}px`;
      socialLink.style.left = originalLeft + 'px'; // Mantén el eje X
    } else {
      let top = originalTop - topContainer;
      let left = originalLeft - leftContainer;
      
      socialLink.style.position = 'absolute';
      socialLink.style.top = top + 'px'; // Restaura la posición original del eje Y
      socialLink.style.left = left + 'px'; // Restaura la posición original del eje X
    }
  });
});