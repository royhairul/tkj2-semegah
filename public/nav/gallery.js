// Kampanye
const kampanye = document.querySelector('.kampanye');
const cover1 = kampanye.querySelector('.cover img');
const shows1 = kampanye.querySelectorAll('.show');

// Poster
const poster = document.querySelector('.poster');
const cover2 = poster.querySelector('.cover img');
const shows2 = poster.querySelectorAll('.show');

// Ikan
const ikan = document.querySelector('.ikan');
const cover3 = ikan.querySelector('.cover img');
const shows3 = ikan.querySelectorAll('.show');

// Siram
const siram = document.querySelector('.siram');
const cover4 = siram.querySelector('.cover img');
const shows4 = siram.querySelectorAll('.show');

// Artikel
const artikel = document.querySelector('.artikel');
const cover5 = artikel.querySelector('.cover img');
const shows5 = artikel.querySelectorAll('.show');

// Mading
const mading = document.querySelector('.mading');
const cover6 = mading.querySelector('.cover img');
const shows6 = mading.querySelectorAll('.show');


function slider(cover, shows, container) {
  container.addEventListener('click', function (e) {

    if (e.target.className == 'show') {
      cover.src = e.target.src;
      cover.classList.add('fade');

      setTimeout(function () {
        cover.classList.remove('fade');
      }, 500);

      shows.forEach(function (show) {
        show.className = 'show';
      });

      e.target.classList.add('act');
    }

  });
}

slider(cover1, shows1, kampanye);
slider(cover2, shows2, poster);
slider(cover3, shows3, ikan);
slider(cover4, shows4, siram);
slider(cover5, shows5, artikel);
slider(cover6, shows6, mading);