"use strict";

window.addEventListener('DOMContentLoaded', () => {

  const section = document.querySelector('.cherry-blossom');


  const createsakura = () => {
    const sakuraEl = document.createElement('span');
    sakuraEl.className = 'sakura';
    const minSize = 10;
    const maxSize = 15;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    sakuraEl.style.width = `${size}px`;
    sakuraEl.style.height = `${size}px`;
    sakuraEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(sakuraEl);

    setTimeout(() => {
      sakuraEl.remove();
    }, 10000);
  }

  setInterval(createsakura, 300);

});

Vue.use(window["vue-js-modal"].default);

var app = new Vue({
  el: "#app",
  methods: {
    show: function (modal) {
      this.$modal.show(modal);
    },
    hide: function (modal) {
      this.$modal.hide(modal);
    },
  },
});

/* 

$(Window).ready(function(){
  var section = $(".cherry-blossom");

  var createsakura = $(function() {
    var sakuraEl = $("<span>");
    sakuraEl.className = "sakura";
    var minSize = 10,
    maxSize = 15,
    size = Math.random() * (maxSize + 1 - minSize) + minSize;
    sakuraEl.width(size);
    sakuraEl.height(size);
    sakuraEl.css("left", Math.random() * innerWidth + 'px');
    section.append("sakuraEl");

    setTimeout(function(){
      sakuraEl.remove();
    }, 10000);
    
  });

  setInterval(createsakura, 300);
}); 

*/
