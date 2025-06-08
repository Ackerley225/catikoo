const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

let background = document.getElementsByClassName("bg")[0];
let luv = document.getElementsByClassName("luv")[0];
let black = document.getElementsByClassName("black")[0];
let glossy = document.getElementsByClassName("glossy")[0];
let gorden = document.getElementsByClassName("gorden")[0];
let wash = document.getElementsByClassName("washtafel")[0];
let hb = document.getElementsByClassName("hb")[0];
let ho = document.getElementsByClassName("ho")[0];
let btn = document.querySelector(".this");

let lope =document.getElementsByClassName("p1")[0];
let lope2 =document.getElementsByClassName("p2")[0];
let star =document.getElementsByClassName("p3")[0];
let star2 =document.getElementsByClassName("p4")[0];

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    background.style.top =value * 0.7 + 'px';
    glossy.style.top = value * 0.6 +'px';
    black.style.top = value * 0.5 +'px';
    gorden.style.top = value * 0.67 +'px';
    luv.style.top = value * 0.5 +'px';
    wash.style.top = value * 0.38 +'px';
    wash.style.left = value * 0.05 + 'px';
    hb.style.marginLeft = value * -1 + 'px';
    ho.style.marginLeft = value * -1 + 'px';
    btn.style.marginTop = value * 0.3 + 'px';
    hb.style.marginTop = value * 0.3 + 'px';
    ho.style.marginTop = value * 0.3 + 'px';

    lope.style.top =value * -0.3 + 'px';
    lope2.style.top =value * -0.7 + 'px';
    star.style.top =value * -0.4 + 'px';
    star2.style.top =value * -0.2 + 'px';


});

const images = document.querySelectorAll('.gallery-img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view'); // reset saat keluar viewport
        }
        });
    }, {
        threshold: 0.3
    });

    images.forEach(img => observer.observe(img));

    const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });




const nav = document.querySelector('.nav');
const gallerySection = document.querySelector('.gallery-section');

window.addEventListener('scroll', () => {
  const galleryTop = gallerySection.offsetTop;
  const scrollPos = window.scrollY;

  if (scrollPos + 50 >= galleryTop) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});



