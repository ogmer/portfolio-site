Vue.use(window["vue-js-modal"].default);

var app = new Vue({
  el: "#app1",
  methods: {
    show: function () {
      this.$modal.show("modal-1");
    },
    hide: function () {
      this.$modal.hide("modal-1");
    },
  },
});

var app = new Vue({
  el: "#app2",
  methods: {
    show: function () {
      this.$modal.show("modal-2");
    },
    hide: function () {
      this.$modal.hide("modal-2");
    },
  },
});

var app = new Vue({
  el: "#app3",
  methods: {
    show: function () {
      this.$modal.show("modal-3");
    },
    hide: function () {
      this.$modal.hide("modal-3");
    },
  },
});

var app = new Vue({
  el: "#app4",
  methods: {
    show: function () {
      this.$modal.show("modal-4");
    },
    hide: function () {
      this.$modal.hide("modal-4");
    },
  },
});
