require(["vue", "layers", "colorPicker"], function (a) {
    var deafultData = {
        isRepeat: false,
        nameStr: "",
        separator: "\n",
        nameArr: [],
        askedArr: [],
        askArr: [],
        currentName: "Ready",
        scrollStatus: true,
        detailStatus: true,
        bgColor: "#ffffff",
        textColor: "#00000",
        textShadow: "#f03333 1px 0 0, #df2121 0 10px 0, #be1b1b -1px 0 0, #de1d1d 0 -1px 0",
        textSize: 100,
        speed: 100,
        fontWeight: 600,
        fontFamily: "Microsoft YaHei",
        bgImage: "",
    };
    app = new a({
        el: "#app",
        data: deafultData,
        watch: {
            nameStr: function () {
                var g = $.trim(this.nameStr),
                    f = [],
                    b = g.split(this.separator);
                var e = b.length;
                for (var d = 0; d < e; d++) {
                    var c = $.trim(b[d]);
                    if ("" !== c) {
                        f.push(c)
                    }
                }
                this.nameArr = f;
                this.askArr = Object.assign([], this.nameArr);
            }
        },
        methods: {
            changeProp: function() {
                var b = this;
                localStorage.setItem("$data", JSON.stringify(b.$data))
            },
            fullscreen: function() {
                var c = document.getElementById("container")
                c.requestFullscreen()
            },
            changebg: function() {
                var c = document.getElementById("container")
                var bg = document.getElementById("bg")
                var file = bg.files[0]

                var b = this;
    
                // 读取文件:
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'            
                    // c.style.backgroundImage = 'url(' + data + ')';
                    b.bgImage = 'url(' + data + ')';

                    b.changeProp()
                };
                // 以DataURL的形式读取文件:
                reader.readAsDataURL(file);
            },
            resetAll: function () {
                localStorage.removeItem("$data")
                window.location.reload();
            },
            reset: function () {
                var b = this;
                this.askedArr = [];
                this.askArr = Object.assign([], this.nameArr);
                this.scrollStatus = false;
                setTimeout(function () {
                    b.currentName = "Ready"
                }, 100)
            }, setName: function () {
                var b = this;
                layer.prompt({
                    title: "每行一个名单",
                    formType: 2,
                    maxlength: 999999
                }, function (d, c) {
                    layer.close(c);
                    b.nameStr = d
                    localStorage.setItem('nameStr', d)
                })
            }, toggleAsk: function () {
                var b = this;
                if (this.scrollStatus) {
                    this.scrollStatus = false;
                    setTimeout(function () {
                        b.askedArr = [b.currentName].concat(b.askedArr);
                        if (!b.isRepeat) {
                            for (var c = 0; c < b.askArr.length; c++) {
                                if (b.askArr[c] === b.currentName) {
                                    b.askArr.splice(c, 1);
                                    break
                                }
                            }
                        }
                    }, b.speed)
                } else {
                    this.scrollStatus = true;
                    this.scrollName()
                }
            }, scrollName: function () {
                if (0 === this.askArr.length) {
                    layer.msg("名单列表为空！");
                    this.scrollStatus = false;
                    return
                }
                var b = this;
                setTimeout(function () {
                    var c = Math.floor(Math.random() * b.askArr.length);
                    b.currentName = b.askArr[c];
                    if (b.scrollStatus) {
                        b.scrollName()
                    }
                }, b.speed)
            }, showDemo: function () {
                var b = this;
                this.nameStr = decodeURIComponent("%E6%99%97%E6%98%B1%0A%E6%99%97%E6%97%A5%0A%E6%B6%B5%E7%95%85%0A%E6%B6%B5%E6%B6%A4%0A%E6%B6%B5%E4%BA%AE%0A%E6%B6%B5%E5%BF%8D%0A%E6%B6%B5%E5%AE%B9%0A%E6%B6%B5%E6%B6%A6%0A%E6%B6%B5%E6%B6%B5%0A%E6%B6%B5%E7%85%A6%0A%E6%B6%B5%E8%93%84%0A%E6%B6%B5%E8%A1%8D%0A%E6%B6%B5%E6%84%8F%0A%E6%B6%B5%E6%98%A0%0A%E6%B6%B5%E8%82%B2%0A%E7%BF%B0%E9%87%87%0A%E7%BF%B0%E6%B1%A0%0A%E7%BF%B0%E9%A3%9E%0A%E7%BF%B0%E6%B5%B7%0A%E7%BF%B0%E7%BF%AE%0A%E7%BF%B0%E6%9E%97%0A%E7%BF%B0%E5%A2%A8%0A%E7%BF%B0%E5%AD%A6%0A%E7%BF%B0%E9%9F%B3%0A%E7%80%9A%E7%8E%A5%0A%E7%BF%B0%E8%97%BB%0A%E7%80%9A%E6%B5%B7%0A%E7%80%9A%E6%BC%A0%0A%E6%98%8A%E8%8B%8D%0A%E6%98%8A%E6%98%8A%0A%E6%98%8A%E7%A9%BA%0A%E6%98%8A%E4%B9%BE%0A%E6%98%8A%E7%A9%B9%0A%E6%98%8A%E7%84%B6%0A%E6%98%8A%E7%84%B6%0A%E6%98%8A%E5%A4%A9%0A%E6%98%8A%E7%84%B1%0A%E6%98%8A%E8%8B%B1%0A%E6%B5%A9%E6%B3%A2%0A%E6%B5%A9%E5%8D%9A%0A%E6%B5%A9%E5%88%9D%0A%E6%B5%A9%E5%A4%A7%0A%E6%B5%A9%E5%AE%95%0A%E6%B5%A9%E8%8D%A1%0A%E6%B5%A9%E6%AD%8C%0A%E6%B5%A9%E6%80%9D%0A%E6%B5%A9%E8%A8%80%0A%E7%9A%93%E8%BD%A9%0A%E5%92%8C%E8%94%BC%0A%E5%92%8C%E5%AE%89%0A%E5%92%8C%E7%92%A7%0A%E5%92%8C%E6%98%B6%0A%E5%92%8C%E7%95%85%0A%E5%92%8C%E9%A3%8E%0A%E5%92%8C%E6%AD%8C%0A%E5%92%8C%E5%85%89%0A%E5%92%8C%E5%B9%B3%0A%E5%92%8C%E6%B4%BD%0A%E5%92%8C%E6%83%AC%0A%E5%92%8C%E9%A1%BA%0A%E5%92%8C%E7%A1%95%0A%E5%92%8C%E9%A2%82%0A%E5%92%8C%E6%B3%B0%0A%E5%92%8C%E6%82%8C%0A%E5%92%8C%E9%80%9A%0A%E5%92%8C%E5%90%8C%0A%E5%92%8C%E7%85%A6%0A%E5%92%8C%E9%9B%85%0A%E5%92%8C%E5%AE%9C%0A%E5%92%8C%E6%80%A1%0A%E5%92%8C%E7%8E%89%0A%E5%92%8C%E8%A3%95%0A%E5%92%8C%E8%B1%AB%0A%E5%92%8C%E6%82%A6%0A%E5%92%8C%E9%9F%B5%0A%E9%9C%9E%E5%A7%9D%0A%E9%9C%9E%E6%9C%88%0A%E9%9C%9E%E8%8B%B1%0A%E9%9C%9E%E9%9B%B0%0A%E9%9C%9E%E5%BD%B1%0A%E9%9C%9E%E8%B5%A9%0A%E9%9C%9E%E6%96%87%0A%E6%B9%98%E4%BA%91%0A%E9%A6%99%E9%A6%A8%0A%E5%90%91%E5%8D%89%0A%E5%90%91%E5%BD%A4%0A%E5%90%91%E9%9B%AA%E3%80%80%0A%E6%99%93%E7%87%95%0A%E6%99%93%E8%8E%89%0A%E6%99%93%E5%87%A1%0A%E6%99%93%E5%85%B0%0A%E6%99%93%E6%9B%BC%0A%E6%99%93%E9%9C%9C%0A%E7%AC%91%E5%AF%92%0A%E5%BF%83%E8%AF%AD%0A%E5%BF%83%E9%A6%99%0A%E5%BF%83%E6%84%AB%0A%E5%BF%83%E5%AE%9C%0A%E5%BF%83%E6%80%A1%0A%E9%9B%85%E5%AE%81%0A%E9%9B%85%E7%90%B4%0A%E9%9B%85%E5%AE%B9%0A%E9%9B%85%E6%9F%94%0A%E9%9B%85%E8%95%8A%0A%E9%9B%85%E5%BD%A4%0A%E9%9B%85%E9%9F%B5%0A%E9%9B%85%E5%A8%B4%0A%E9%9B%85%E6%87%BF%0A%E9%9B%85%E9%9D%99%0A%E9%9B%85%E6%B4%81%0A%E9%9B%85%E4%B8%BD%E3%80%80%0A%E7%BA%A2%E8%9E%BA%0A%E8%99%B9%E9%9B%A8%0A%E8%99%B9%E5%BD%A9%0A%E8%99%B9%E8%8B%B1%0A%E8%99%B9%E9%A2%96%0A%E8%99%B9%E5%BD%B1%0A%E6%80%80%E7%8E%89%0A%E6%85%A7%E5%BF%83%0A%E6%85%A7%E9%A2%96%0A%E6%85%A7%E9%9B%85%0A%E6%85%A7%E6%99%BA%0A%E6%85%A7%E7%BE%8E%0A%E6%85%A7%E6%8D%B7%0A%E6%85%A7%E4%B8%BD%0A%E6%85%A7%E6%9C%88%0A%E6%85%A7%E4%BA%91%0A%E6%85%A7%E4%BF%8A%0A%E6%85%A7%E7%A7%80%0A%E6%85%A7%E5%B7%A7%0A%E6%85%A7%E8%8B%B1%0A%E6%85%A7%E8%89%B3%0A%E6%B5%A9%E5%B2%9A%0A%E9%A6%A8%E5%85%B0%0A%E9%A6%A8%E6%AC%A3");
                this.scrollStatus = true;
                this.askedArr = [];
                setTimeout(function () {
                    b.scrollName()
                }, 100)
            }, show: function (nameStr) {
                var b = this;
                this.nameStr = nameStr;
                this.scrollStatus = true;
                this.askedArr = [];
                setTimeout(function () {
                    b.scrollName()
                }, 100)
            }
        },
        mounted: function () {
            var b = this;
            $(document).keydown(function (d) {
                if (!d) {
                    var d = window.event
                }
                if (d.keyCode == 32) {
                    b.toggleAsk();
                    return false
                }
            });
            var c = $(".js-color-picker").colpick({
                submitText: "确定",
                layout: "rgbhex",
                onSubmit: function (d, g, f) {
                    var e = $(this.el).data("name");
                    c.colpickHide();
                    b[e] = "#" + g
                }
            })

            var data = localStorage.getItem("$data")
            if (data !== null) {
                // b.$data = JSON.parse(data);
                Object.assign(this.$data, JSON.parse(data)) // 重置至初始化值
            }

            var nameStr = localStorage.getItem("nameStr")
            if (nameStr !== null) {
                this.show(nameStr);
            } else {
                this.showDemo();
            }
        }
    })
});
require(["jquery"], function () {
    $(document).on("keydown", function (f) {
        var f = event || window.event || arguments.callee.caller.arguments[0];
        if (f && f.keyCode === 122) {
            f.preventDefault();
            var a = document.documentElement;
            var b = a.requestFullScreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullScreen;
            if (typeof b != "undefined" && b) {
                b.call(a)
            } else {
                if (typeof window.ActiveXObject != "undefined") {
                    var d = new ActiveXObject("WScript.Shell");
                    if (d != null) {
                        d.SendKeys("{F11}")
                    }
                }
            }
            var c = function () {
                $("body").addClass("full-screen")
            };
            var g = function () {
                $("body").removeClass("full-screen")
            };
            document.addEventListener("webkitfullscreenchange", function () {
                if (document.webkitIsFullScreen) {
                    c()
                } else {
                    g()
                }
            }, false);
            document.addEventListener("fullscreenchange", function () {
                if (document.fullscreen) {
                    c()
                } else {
                    g()
                }
            }, false);
            document.addEventListener("mozfullscreenchange", function () {
                if (document.mozFullScreen) {
                    c()
                } else {
                    g()
                }
            }, false);
            document.addEventListener("msfullscreenchange", function () {
                if (document.msFullscreenElement) {
                    c()
                } else {
                    g()
                }
            }, false)
        }
    })
});