import burgerMenu from "./js/modules/burger";
import faq from "./js/modules/faq";
import popup from "./js/modules/popup";
import showAnimation from "./js/modules/show-animation";
import smoothScrolling from "./js/modules/smooth-scrolling";

window.addEventListener("DOMContentLoaded", () => {
  faq();
  burgerMenu();
  counter();
  popup();
  showAnimation();
  smoothScrolling();
});
