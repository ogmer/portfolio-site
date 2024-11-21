"use strict";

// Constants
const SAKURA_CONFIG = {
  minSize: 10,
  maxSize: 15,
  animationDuration: 10000,
  createInterval: 300
};

const MODAL_CONFIGS = [
  { selector: "#app1", modalId: "modal-1" },
  { selector: "#app2", modalId: "modal-2" },
  { selector: "#app3", modalId: "modal-3" },
  { selector: "#app4", modalId: "modal-4" },
];

// Cherry blossom effect
$(document).ready(() => {
  const $section = $(".cherry-blossom");
  
  const createSakura = () => {
    const $sakuraEl = $('<span class="sakura"></span>');
    const size = Math.random() * (SAKURA_CONFIG.maxSize - SAKURA_CONFIG.minSize) + SAKURA_CONFIG.minSize;

    $sakuraEl.css({
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * $(window).width()}px`,
      top: `${Math.random() * $(window).height()}px`,
    });

    $section.append($sakuraEl);
    setTimeout(() => $sakuraEl.remove(), SAKURA_CONFIG.animationDuration);
  };

  setInterval(createSakura, SAKURA_CONFIG.createInterval);
});

// Modal management
Vue.use(window["vue-js-modal"].default);

const createVueInstance = (selector, modalId) => new Vue({
  el: selector,
  methods: { 
    show() { this.$modal.show(modalId); },
    hide() { this.$modal.hide(modalId); }
  }
});

MODAL_CONFIGS.forEach(({ selector, modalId }) => createVueInstance(selector, modalId));
