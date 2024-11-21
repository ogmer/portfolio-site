"use strict";

// Constants
const SAKURA_CONFIG = {
  minSize: 10,
  maxSize: 15,
  animationDuration: 10000,
  createInterval: 300,
};

// Cherry blossom effect
$(document).ready(() => {
  const $section = $(".cherry-blossom");

  const createSakura = () => {
    const size =
      Math.random() * (SAKURA_CONFIG.maxSize - SAKURA_CONFIG.minSize) +
      SAKURA_CONFIG.minSize;
    const positionX = Math.random() * $(window).width();
    const positionY = Math.random() * $(window).height();

    const sakuraStyle = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${positionX}px`,
      top: `${positionY}px`,
      animationDuration: `${SAKURA_CONFIG.animationDuration}ms`,
    };

    const $sakuraEl = $('<span class="sakura"></span>').css(sakuraStyle);
    $section.append($sakuraEl);

    $sakuraEl.on("animationend", () => {
      $sakuraEl.remove();
    });
  };

  setInterval(createSakura, SAKURA_CONFIG.createInterval);
});

// Modal management
Vue.use(window["vue-js-modal"].default);

new Vue({
  el: ".menu",
  methods: {
    show(modalId) {
      this.$modal.show(modalId);
    },
    hide(modalId) {
      this.$modal.hide(modalId);
    },
  },
});
