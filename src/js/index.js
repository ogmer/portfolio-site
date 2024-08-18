"use strict";

// jQuery cherry blossom effect
$(document).ready(() => {
  const $section = $(".cherry-blossom");

  /**
   * Creates and appends a sakura element to the section.
   */
  const createSakura = () => {
    const $sakuraEl = $('<span class="sakura"></span>');
    const minSize = 10;
    const maxSize = 15;
    const size = Math.random() * (maxSize - minSize) + minSize;

    // Calculate random positions
    const positionX = Math.random() * $(window).width();
    const positionY = Math.random() * $(window).height();

    $sakuraEl.css({
      width: `${size}px`,
      height: `${size}px`,
      left: `${positionX}px`,
      top: `${positionY}px`,
    });

    $section.append($sakuraEl);

    // Remove the sakura element after 10 seconds
    setTimeout(() => {
      $sakuraEl.remove();
    }, 10000);
  };

  // Create sakura elements at regular intervals
  setInterval(createSakura, 300);
});

// Vue.js modal management
Vue.use(window["vue-js-modal"].default);

/**
 * Creates and returns a Vue instance for a specified modal.
 * @param {string} selector - The element selector for the Vue instance.
 * @param {string} modalId - The ID of the modal to manage.
 * @returns {Vue} The created Vue instance.
 */
const createVueInstance = (selector, modalId) => {
  return new Vue({
    el: selector,
    methods: {
      show() {
        this.$modal.show(modalId);
      },
      hide() {
        this.$modal.hide(modalId);
      },
    },
  });
};

// Modal configurations
const modalConfigs = [
  { selector: "#app1", modalId: "modal-1" },
  { selector: "#app2", modalId: "modal-2" },
  { selector: "#app3", modalId: "modal-3" },
  { selector: "#app4", modalId: "modal-4" },
];

// Create Vue instances for each modal
modalConfigs.forEach(({ selector, modalId }) =>
  createVueInstance(selector, modalId),
);
