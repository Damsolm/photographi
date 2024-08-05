//  toggle nav bar background  on scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// CONTACT BUTTON (circular text buttons)

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style= "transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})




// swiperjs auto play slide
  const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      loop: Infinity,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        599: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 60
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });


    const nav = document.querySelector('.nav__links')
    const openNavBtn = document.querySelector('#nav__toggle-open')
    const closeNavBtn = document.querySelector('#nav__toggle-close')


    const openNav = () => {
      nav.style.display = 'flex';
      openNavBtn.style.display = 'none';
      closeNavBtn.style.display = 'inline-block';
    }

    openNavBtn.addEventListener('click', openNav);


    

    const closeNav = () => {
      nav.style.display = 'none';
      openNavBtn.style.display = 'inline-block';
      closeNavBtn.style.display = 'none';
    }

    closeNavBtn.addEventListener('click', closeNav);

// close nav menu when any nav Items is clicked on tablets and mobile
    const navItems = document.querySelectorAll('.nav__links li a');
    if(window.innerWidth < 1024) {
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          closeNav();
        })
      })
    }

