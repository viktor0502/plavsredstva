window.addEventListener("DOMContentLoaded", () => {
  // Burger menu

  const burger = document.querySelectorAll(`.burger-btn`),
    navMenu = document.querySelectorAll(`.navbar__menu`),
    link = document.querySelectorAll(`.nav__link`);

  const scrollLock = () => {
      document.body.style.overflow = "hidden";
    },
    scrollUnclock = () => {
      document.body.style.overflow = "";
    },
    menuOpen = () => {
      navMenu.forEach((menu) => {
        menu.classList.add(`active`);
        scrollLock();
      });
    },
    menuClose = () => {
      navMenu.forEach((menu) => {
        menu.classList.remove(`active`);
        scrollUnclock();
      });
    };

  burger.forEach((burger) => {
    burger.addEventListener(`click`, () => {
      burger.classList.toggle(`active`);
      if (burger.classList.contains(`active`)) {
        menuOpen();
      } else {
        menuClose();
      }
    });
  });
  link.forEach((i) => {
    i.addEventListener(`click`, () => {
      burger.forEach((burger) => {
        burger.classList.remove(`active`);
        menuClose();
      });
    });
  });

  // Tabs

  const questions = document.querySelectorAll(".question__item"),
    answers = document.querySelectorAll(".answers__item"),
    questionsParent = document.querySelector(".faq__questions");

  function hideTabs() {
    answers.forEach((i) => {
      i.classList.remove("answers__item--active");
    });
    questions.forEach((i) => {
      i.classList.remove("question__item--active");
    });
  }
  function showCurrentTab(i = 0) {
    questions[i].classList.add("question__item--active");
    answers[i].classList.add("answers__item--active");
  }

  hideTabs();
  showCurrentTab();
  questionsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("question__item")) {
      questions.forEach((item, i) => {
        if (target == item) {
          hideTabs();
          showCurrentTab(i);
        }
      });
    }
  });

  // Popup
  function popup(btnOpenSelector, popupSelector, currentPopupSelector) {
    const btnOpen = document.querySelectorAll(btnOpenSelector),
      popup = document.querySelector(popupSelector),
      btnClose = document.querySelector(".popup__close"),
      popupContent = document.querySelectorAll(currentPopupSelector);
    //  console.log( popupContent[2])
       function hideContents(){
        popupContent.forEach(p=>{
          p.style.display = 'none'
        })
       }
       function showCurrContent(i){
        popupContent[i].style.display = 'block'
       }
    const scrollToLock = () => {
        document.body.style.overflow = "hidden";
      },
      scrollToUnclock = () => {
        document.body.style.overflow = "";
      },
  
      popupOpen = (e) => {
        popup.classList.add(`open`);
        scrollToLock();
        e.preventDefault();
        hideContents()


      },
      popupClose = () => {
        popup.classList.remove(`open`);
        scrollToUnclock();
      };

    btnOpen.forEach((btn, i) => {
      console.log(i)
      btn.addEventListener(`click`, (e)=>{
        popupOpen(e)
        showCurrContent(i)

      });
    });
    btnClose.addEventListener(`click`, popupClose);
    popup.addEventListener(`click`, (e) => {
      if (e.target === popup) {
        popupClose();
      }
    });
    window.addEventListener(`keydown`, (el) => {
      if (el.code === `Escape`) {
        popupClose();
      }
    });
  }
  popup(".btn-open-popup", ".popup", ".popup__content");

  // Show-animation + counter

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }
  let options = { threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let observerCounter = new IntersectionObserver(counterEntry, options);
  let elements = document.querySelectorAll(".element-animation");
  let numbers = document.querySelectorAll(".number");

  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let num of numbers) {
    observerCounter.observe(num);
  }
  function counterEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting && !change.target.classList.contains("over")) {
        commonCounter();
      }
    });
  }
  function counter(num, elem, step) {
    const time = 1000;
    let l = document.querySelector("." + elem);
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n >= num) {
        clearInterval(interval);
      }
      l.innerHTML = n;
      l.classList.add("over");
    }, t);
  }
  function commonCounter() {
    counter(10, "years", 1);
    counter(3000, "number-of-clients", 60);
  }

  // Smooth scrolling

  const anchors = document.querySelectorAll(".nav__link");
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
