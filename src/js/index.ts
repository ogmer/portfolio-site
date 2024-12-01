//仮のコードなので使用不可


// Constants
const SAKURA_CONFIG = {
  minSize: 10,
  maxSize: 15,
  animationDuration: 10000,
  createInterval: 300,
};

// Cherry blossom effect
document.addEventListener("DOMContentLoaded", () => {
  const $section = document.querySelector(".cherry-blossom") as HTMLElement;

  const createSakura = (): void => {
    const size: number =
      Math.random() * (SAKURA_CONFIG.maxSize - SAKURA_CONFIG.minSize) +
      SAKURA_CONFIG.minSize;
    const positionX: number = Math.random() * window.innerWidth;
    const positionY: number = Math.random() * window.innerHeight;

    const sakuraStyle: Record<string, string> = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${positionX}px`,
      top: `${positionY}px`,
      animationDuration: `${SAKURA_CONFIG.animationDuration}ms`,
    };

    const $sakuraEl = document.createElement("span");
    $sakuraEl.classList.add("sakura");
    Object.assign($sakuraEl.style, sakuraStyle);
    $section.appendChild($sakuraEl);

    $sakuraEl.addEventListener("animationend", () => {
      $section.removeChild($sakuraEl);
    });
  };

  setInterval(createSakura, SAKURA_CONFIG.createInterval);
});

// Modal management

import Vue from "vue";
import VModal from "vue-js-modal";

Vue.use(VModal);

new Vue({
  el: ".menu",
  methods: {
    show(modalId: string): void {
      this.$modal.show(modalId);
    },
    hide(modalId: string): void {
      this.$modal.hide(modalId);
    },
  },
});
