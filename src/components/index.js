"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var app = (0, vue_1.createApp)({
    data: function () {
        return {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            sakuraConfig: {
                minSize: 10,
                maxSize: 15,
                animationDuration: 10000,
                createInterval: 300,
            },
            sakuraElements: [],
        };
    },
    methods: {
        showModal: function (modalId) {
            var modalNumber = modalId.replace('modal', '');
            this["showModal".concat(modalNumber)] = true;
        },
        hideModal: function (modalId) {
            var modalNumber = modalId.replace('modal', '');
            this["showModal".concat(modalNumber)] = false;
        },
        createSakura: function () {
            var _this = this;
            if (this.sakuraElements.length >= 100)
                return;
            var size = Math.random() * (this.sakuraConfig.maxSize - this.sakuraConfig.minSize) + this.sakuraConfig.minSize;
            var positionX = Math.random() * window.innerWidth;
            var positionY = Math.random() * window.innerHeight;
            var sakuraStyle = {
                width: "".concat(size, "px"),
                height: "".concat(size, "px"),
                left: "".concat(positionX, "px"),
                top: "".concat(positionY, "px"),
                animationDuration: "".concat(this.sakuraConfig.animationDuration, "ms"),
                transform: 'translateZ(0)',
            };
            var sakura = { id: Date.now(), style: sakuraStyle };
            this.sakuraElements.push(sakura);
            requestAnimationFrame(function () {
                setTimeout(function () {
                    _this.sakuraElements = _this.sakuraElements.filter(function (el) { return el.id !== sakura.id; });
                }, _this.sakuraConfig.animationDuration);
            });
        },
        startSakura: function () {
            this.sakuraInterval = setInterval(this.createSakura, this.sakuraConfig.createInterval);
        },
        stopSakura: function () {
            clearInterval(this.sakuraInterval);
        },
    },
    mounted: function () {
        this.startSakura();
    },
    beforeUnmount: function () {
        this.stopSakura();
    },
});
app.mount('.cherry-blossom');
