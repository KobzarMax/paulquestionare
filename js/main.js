// function burgerMenu() {
//   const burger = document.querySelector(".burger");
//   const menu = burger.parentNode;
//
//   burger.addEventListener("click", () => {
//     burger.classList.toggle("active");
//     menu.classList.toggle("active");
//     document.body.classList.toggle("_lock");
//   });
// }
//
// burgerMenu();

const header = document.querySelector("#header");

document.addEventListener("scroll", animateNavbarOnScroll);

function animateNavbarOnScroll() {
  let totalHeight = header.clientHeight + 250;
  if (window.scrollY >= totalHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const s1 = new Swiper(".brands-swiper", {
    // Optional parameters
    // loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 75,
    mousewheel: true,
    breakpoints: {
      1024: {
        mousewheel: false,
      },
    },
    // If we need pagination
    pagination: {
      el: ".brand-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        // Calculate which bullets to show

        return '<span class="' + className + '">' + "</span>";
      },
      dynamicBullets: true,
    },
  });

  const s2 = new Swiper(".counters-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 75,
    mousewheel: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 75,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 120,
        mousewheel: false,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 120,
        mousewheel: false,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const s4 = new Swiper(".reviews-swiper", {
    // Optional parameters
    slidesPerView: 1.3,
    spaceBetween: 65,
    mousewheel: true,
    breakpoints: {
      1024: {
        mousewheel: false,
      },
      1920: {
        mousewheel: false,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const s3 = new Swiper(".numbered-swiper", {
    // Optional parameters
    // loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 75,
    mousewheel: true,
    breakpoints: {
      1024: {
        mousewheel: false,
      },
    },
    // If we need pagination
    pagination: {
      el: ".numbered-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        // Calculate which bullets to show

        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// let init = false;
// let newsSwiper;
// let functionsSwiper;
// function swiperCard() {
//   if (window.innerWidth <= 768) {
//     if (!init) {
//       init = true;
//       newsSwiper = new Swiper(".news-swiper", {
//         // Optional parameters
//         // loop: true,
//         slidesPerView: 1,
//         centeredSlides: true,
//         spaceBetween: 75,
//         mousewheel: true,
//
//         // If we need pagination
//         pagination: {
//           el: ".news-swiper-pagination",
//           clickable: true,
//           renderBullet: function (index, className) {
//             // Calculate which bullets to show
//
//             return '<span class="' + className + '">' + "</span>";
//           },
//           dynamicBullets: true,
//         },
//       });
//       functionsSwiper = new Swiper(".functions-swiper", {
//         // Optional parameters
//         // loop: true,
//         slidesPerView: 1,
//         centeredSlides: true,
//         spaceBetween: 75,
//         mousewheel: true,
//
//         // If we need pagination
//         pagination: {
//           el: ".functions-swiper-pagination",
//           clickable: true,
//           renderBullet: function (index, className) {
//             // Calculate which bullets to show
//
//             return '<span class="' + className + '">' + "</span>";
//           },
//           dynamicBullets: true,
//         },
//       });
//     }
//   } else if (init) {
//     if (newsSwiper) {
//       newsSwiper.destroy();
//     }
//     if (functionsSwiper) {
//       functionsSwiper.destroy();
//     }
//     init = false;
//   }
// }
// swiperCard();
// window.addEventListener("resize", swiperCard);

/* SLIDE UP */
let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.border = "none";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "grid";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.border = "none";

  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  target.style.removeProperty("border");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};

function addAccordionFunctionality(container) {
  const items = container.querySelectorAll(".faq-answer-item");
  const headers = container.querySelectorAll(".faq-answer-header");

  headers.forEach((header, index) => {
    header.addEventListener("click", headerClickHandler);
  });
}

function headerClickHandler() {
  const parent = this.parentNode;
  const content = parent.querySelector(".faq-answer-content");

  if (!parent.classList.contains("active")) {
    parent.classList.add("active");
    slideDown(content);
  } else {
    parent.classList.remove("active");
    slideUp(content);
  }

  const items = parent.parentNode.querySelectorAll(".faq-answer-item");
  items.forEach((item, i) => {
    const itemContent = item.querySelector(".faq-answer-content");
    if (item !== parent && item.classList.contains("active")) {
      slideUp(itemContent);
      item.classList.remove("active");
    }
  });
}

const faqTabsAnswers = document.querySelectorAll(".faq-answers-container");

function initFAQ() {
  faqTabsAnswers.forEach((tab) => {
    addAccordionFunctionality(tab);
  });
}

initFAQ();

// const installFaq = document.querySelector('#installFaq');
//
// const installFaqItems = installFaq.querySelectorAll('li');
// let currentIndex = 0;
//
// installFaqItems.forEach(item => {
//   const itemText = item.querySelector('p');
//   slideUp(itemText);
//   item.classList.remove('active', 'next');
// });
//
// function changeActiveItem() {
//   // Hide the current active item
//   const currentItem = installFaqItems[currentIndex];
//   const currentItemText = currentItem.querySelector('p');
//   currentItem.classList.remove('active');
//   slideUp(currentItemText);
//
//   // Update the index to the next item
//   const nextIndex = (currentIndex + 1) % installFaqItems.length;
//   const nextItem = installFaqItems[nextIndex];
//   const nextItemText = nextItem.querySelector('p');
//
//   // Update the index to the item after the next one
//   const nextToNextIndex = (nextIndex + 1) % installFaqItems.length;
//   const nextToNextItem = installFaqItems[nextToNextIndex];
//
//   // Remove 'next' class from all items
//   installFaqItems.forEach(item => item.classList.remove('next'));
//
//   // Show the next item
//   nextItem.classList.add('active');
//   slideDown(nextItemText);
//
//   // Add 'next' class to the item that will be next
//   nextToNextItem.classList.add('next');
//
//   // Update the current index
//   currentIndex = nextIndex;
// }
//
// setInterval(changeActiveItem, 2000);

const reviewsVideos = document.querySelectorAll(".reviews-swiper video");

reviewsVideos.forEach((video) => {
  video.addEventListener("click", () => {
    if (video.paused) {
      reviewsVideos.forEach((video) => {
        video.pause();
      });
      video.play();
    } else {
      reviewsVideos.forEach((video) => {
        video.pause();
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const questionareInfo = document.querySelector(".questionare-info");
  const questionareInfoHeader = questionareInfo.querySelector(
    ".questionare-answer-header"
  );
  const questionareInfoContent = questionareInfo.querySelector(
    ".questionare-answer-content"
  );

  slideUp(questionareInfoContent);

  questionareInfoHeader.addEventListener("click", () => {
    if (questionareInfoHeader.classList.contains("opened")) {
      questionareInfoHeader.classList.remove("opened");
      slideDown(questionareInfoContent);
    } else {
      questionareInfoHeader.classList.add("opened");
      slideUp(questionareInfoContent);
    }
  });
});

let currentStep = '1';
const totalSteps = '7';

const nextStepButton = document.querySelector('#next-step');
const prevStepButton = document.querySelector('#prev-step');
const skipStepButton = document.querySelector('#skip-step');

function nextStep() {
  if (currentStep.toString() === totalSteps.toString()) {
    document.querySelector('.questionare-steps').classList.add('hidden');
    document.getElementById('questionare-final').classList.remove('hidden');
    document.querySelector('.steps-progress').classList.add('hidden');
  }
  if (currentStep < totalSteps) {
    // Hide current step
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    currentStepElement.classList.add('hidden');
    document.querySelector('.steps-progress').classList.remove('hidden');

    // Show next step
    currentStep++;
    const nextStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    nextStepElement.classList.remove('hidden');
    prevStepButton.classList.remove('hidden');

    // Update progress bar
    const progressStepElement = document.querySelector(`[data-step-index="${currentStep - 1}"]`);
    progressStepElement.classList.remove('bg-dark_green/10');
    progressStepElement.classList.add('bg-green');

    // Update progress bar attribute
    document.querySelector('.steps-progress').setAttribute('data-filled-steps', currentStep - 1);
  }
}

function prevStep() {
  if (currentStep > 1) {
    // Hide current step
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    currentStepElement.classList.add('hidden');

    // Show previous step
    currentStep--;
    const prevStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    prevStepElement.classList.remove('hidden');

    // Update progress bar
    const progressStepElement = document.querySelector(`[data-step-index="${currentStep}"]`);
    progressStepElement.classList.add('bg-dark_green/10');
    progressStepElement.classList.remove('bg-green');

    // Update progress bar attribute
    document.querySelector('.steps-progress').setAttribute('data-filled-steps', currentStep - 1);
  }
}

nextStepButton.addEventListener('click', () => nextStep());
skipStepButton.addEventListener('click', () => nextStep());
prevStepButton.addEventListener('click', () => prevStep());

document.addEventListener("DOMContentLoaded", function() {
  const customSelectWrapper = document.querySelector(".custom-select-wrapper");
  const customSelect = document.querySelector(".custom-select");
  const customSelectTrigger = document.querySelector(".custom-select-trigger");
  const customOptions = document.querySelector(".custom-options");
  const customOptionsItems = document.querySelectorAll(".custom-option");
  const selectElement = document.querySelector("#form_select");

  customSelectTrigger.addEventListener("click", function() {
    customOptions.classList.toggle("open");
  });

  customOptionsItems.forEach(option => {
    option.addEventListener("click", function() {
      customOptionsItems.forEach(item => item.classList.remove("selected"));
      this.classList.add("selected");
      customSelectTrigger.querySelector("span").textContent = this.textContent;
      selectElement.value = this.getAttribute("data-value");
      customOptions.classList.remove("open");
    });
  });

  document.addEventListener("click", function(event) {
    if (!customSelect.contains(event.target)) {
      customOptions.classList.remove("open");
    }
  });
});