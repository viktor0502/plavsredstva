
  const btnOpen = document.querySelector(`.btn-open-popup`),
  popup = document.querySelector(`.popup`),
  btnClose = document.querySelector(`.popup__close`);
  const html = document.getElementsByTagName('html')

const scrollToLock = () => {
    document.body.style.overflow = 'hidden';
    
  },
  scrollToUnclock = () => {
    document.body.style.overflow = '';

  },
  popupOpen = (e) => {
    popup.classList.add(`open`);
    scrollToLock();
    e.preventDefault()
    
  },
  popupClose = () => {
    popup.classList.remove(`open`);
    scrollToUnclock();
  };

btnOpen.addEventListener(`click`, popupOpen);
btnClose.addEventListener(`click`, popupClose)
popup.addEventListener(`click`, (e) => {
    if(e.target === popup){
        popupClose()
    }
})
window.addEventListener(`keydown`, (el) => {
  if (el.code === `Escape`) {
    popupClose();
  }
});

