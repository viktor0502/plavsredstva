// const time = 1000;

// function counter(num, elem, step) {
//   let l = document.querySelector("." + elem);
//   let n = 0;
//   let t = Math.round(time / (num / step));
//   let interval = setInterval(() => {
//     n = n + step;
//     if (n >= num) {
//       clearInterval(interval);
//     }
//     l.innerHTML = n;
//   }, t);
// }

// counter(10, "years", 1);
// counter(3000, "number-of-clients", 60);
// function commonCounter() {
//   counter(10, "years", 1);
//   counter(3000, "number-of-clients", 60);
// }

// const counterElements = document.querySelectorAll(".number");

// if (counterElements.length > 0) {
//   window.addEventListener("scroll", startCounter);
//   function startCounter(params) {
//     for (let i = 0; i < counterElements.length; i++) {
//       const element = counterElements[i];
//       const elementHeight = element.offsetHeight;
//       const elementOffset = offset(element).top;
//       const animStart = 4;

//       let animPoint = window.innerHeight - elementHeight / animStart;
//       if (elementHeight > window.innerHeight) {
//         animPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         scrollY > elementOffset - animPoint &&
//         scrollY < elementOffset + elementHeight
//       ) {
//         commonCounter()
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//       scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }
// }
