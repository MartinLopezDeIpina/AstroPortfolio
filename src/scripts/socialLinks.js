window.addEventListener('scroll', function() {
  let header = document.querySelector('header'); 
  let socialLinks = document.querySelectorAll('.socialLink');
  let headerRect = header.getBoundingClientRect();
  
  socialLinks.forEach(function(socialLink) {
    let socialLinkRect = socialLink.getBoundingClientRect();
    
    if (headerRect.bottom > socialLinkRect.top && headerRect.top < socialLinkRect.bottom) {
      // El encabezado está pasando por encima del enlace social
      //socialLink.style.position = 'fixed';
      //socialLink.style.top = '0'; // Esto hará que los enlaces se queden pegados en la parte superior cuando el encabezado pase por encima de ellos
    } else {
      // El encabezado no está pasando por encima del enlace social
      socialLink.style.position = 'absolute';
      socialLink.style.top = ''; // Esto hará que los enlaces vuelvan a su posición original cuando el encabezado no esté pasando por encima de ellos
    }
  });
});