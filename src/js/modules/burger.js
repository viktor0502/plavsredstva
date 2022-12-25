  const burger = document.querySelectorAll(`.burger-btn`),
  navMenu = document.querySelectorAll(`.navbar__menu`),
  link = document.querySelectorAll(`.nav__link`);


const scrollLock = () => {
    document.body.style.overflow='hidden';
  },
  scrollUnclock = () => {
    document.body.style.overflow='';
  },
  menuOpen = () => {
    navMenu.forEach(menu=>{
      menu.classList.add(`active`);
      scrollLock();
    })
  },
  menuClose = () => {
    navMenu.forEach(menu=>{
      menu.classList.remove(`active`);
      scrollUnclock()
    })
  };

burger.forEach(burger =>{
  burger.addEventListener(`click`, () => {
    burger.classList.toggle(`active`);
    if (burger.classList.contains(`active`)) {
      menuOpen();
    } else {
      menuClose();
    }
  });
})
link.forEach(i =>{
  i.addEventListener(`click`, ()=>{
    burger.forEach(burger=>{
      burger.classList.remove(`active`);
      menuClose()
    })
    })
})
