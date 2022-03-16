requirejs.config({
    config: {
        text: {
            useXhr: function (c, d, b, a) {
                return true
            }
        }
    },
    map: {
        "*": {
            css: "https://cdn.uutool.cn/vendor/requirejs/css.min.js"
        }
    },
    paths: {
        text: "https://cdn.uutool.cn/vendor/requirejs/text.min",
        css: "https://cdn.uutool.cn/vendor/requirejs/css.min",
        jquery: "https://cdn.uutool.cn/vendor/jquery/jquery-1.9.1.min",
        cryptojs: "https://cdn.uutool.cn/vendor/crypto-js/crypto-js",
        qrcode: "https://cdn.uutool.cn/vendor/jq-plugins/jquery-qrcode.min",
        layers: "https://cdn.uutool.cn/vendor/layer/3.0.3/layer",
        laydate: "https://cdn.uutool.cn/vendor/laydate/5.0.9/laydate",
        lazyload: "https://cdn.staticfile.org/vanilla-lazyload/10.16.2/lazyload.amd.min",
        clipboard: "https://cdn.uutool.cn/vendor/clipboard/2.0.1/clipboard.min",
        moment: "https://cdn.uutool.cn/vendor/moment/2.10.6/moment.min",
        vue: "https://cdn.uutool.cn/vendor/vue/2.5.17/vue",
        requester: "https://cdn.uutool.cn/lib/requester",
        fileSaver: "https://cdn.uutool.cn/vendor/file-saver/2.0.0/FileSaver.min",
        colorPicker: "https://cdn.uutool.cn/vendor/jquery-color-picker/js/colpick",
        swiper: "https://cdn.uutool.cn/vendor/swiper/3.4.2/js/swiper.min",
        veeValidate: "https://cdn.uutool.cn/vendor/vee-validate/2.0.9/vee-validate.min",
        photoSwiper: "https://cdn.uutool.cn/vendor/photoswipe/4.1.2/photoswipe.min",
        photoSwiperUi: "https://cdn.uutool.cn/vendor/photoswipe/4.1.2/photoswipe-ui-default.min",
        xlsx: "https://cdn.uutool.cn/vendor/js-xlsx/0.14.0/xlsx.full.min",
        plupload: "https://cdn.uutool.cn/vendor/plupload/3.1.2/plupload.min",
        jszip: "https://cdn.uutool.cn/vendor/jszip/3.2.0/jszip.min",
        sortablejs: "https://cdn.uutool.cn/vendor/sortable/1.4.0/sortable.min",
        vue_draggable: "https://cdn.uutool.cn/vendor/vue-draggable/2.16.0/vuedraggable.min",
        date2lunar: "https://cdn.uutool.cn/vendor/lib/calendar/calendar.min",
        mathjs: "https://cdn.uutool.cn/vendor/mathjs/7.0.0/math.min",
        nosleep: "https://cdn.uutool.cn/vendor/nosleep/0.11.0/nosleep.min"
    },
    shim: {
        qrcode: {
            deps: ["jquery"]
        },
        colorPicker: {
            deps: ["jquery", "css!https://cdn.uutool.cn/vendor/jquery-color-picker/css/colpick.css"]
        },
        layers: {
            deps: ["jquery", "css!https://cdn.uutool.cn/vendor/layer/3.0.3/skin/default/layer"]
        },
        laydate: {
            deps: ["css!https://cdn.uutool.cn/vendor/laydate/5.0.9/theme/default/laydate"]
        },
        swiper: {
            deps: ["css!https://cdn.uutool.cn/vendor/swiper/3.4.2/css/swiper.min.css"]
        },
        photoSwiper: {
            deps: ["css!https://cdn.uutool.cn/vendor/photoswipe/4.1.2/photoswipe.min.css", "css!https://cdn.uutool.cn/vendor/photoswipe/4.1.2/default-skin/default-skin.min.css"]
        }
    }
});