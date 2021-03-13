Vue.use(window["vue-js-modal"].default);
var app = new Vue({
  el: '#app1',
  methods: {
    show: function() {
      this.$modal.show('modal-area1');
    },
    hide: function() {
      this.$modal.hide('modal-area1');
    },
  }
});

var app = new Vue({
    el: '#app2',
    methods: {
      show: function() {
        this.$modal.show('modal-area2');
      },
      hide: function() {
        this.$modal.hide('modal-area2');
      },
    }
  });

  var app = new Vue({
    el: '#app3',
    methods: {
      show: function() {
        this.$modal.show('modal-area3');
      },
      hide: function() {
        this.$modal.hide('modal-area3');
      },
    }
  });

  var app = new Vue({
    el: '#app4',
    methods: {
      show: function() {
        this.$modal.show('modal-area4');
      },
      hide: function() {
        this.$modal.hide('modal-area4');
      },
    }
  });