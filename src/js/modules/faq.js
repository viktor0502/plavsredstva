
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



