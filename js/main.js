$(document).ready(function() {

    function requestFullscreen() {
        var docElement = document.documentElement,
            request;

        request = docElement.requestFullScreen
            || docElement.webkitRequestFullScreen
            || docElement.mozRequestFullScreen
            || docElement.msRequestFullScreen;

        if (typeof request !== "undefined" && request) {
            request.call(docElement);
            return true;
        }
        return false;
    }

    function exitFullscreen() {
        var request = document.exitFullscreen
            || document.webkitExitFullscreen
            || document.mozCancelFullScreen
            || document.msExitFullscreen;

        if (typeof request !== 'undefined' && request) {
            request.call(document);
            return true;
        }
        return false;
    }

    var fancyOpen = false,
        fancyFiles = [
                {
                    href: "img/big_image_1.jpg",
                    title: "schöne Landschaft"
                },
                {
                    href: "img/big_image_2.jpg",
                    title: "noch schönere Landschaft"
                },
                {
                    href: "img/big_image_3.jpg",
                    title: "extrem schöne Landschaft"
                }
        ],
        fancyOptions = {
                afterShow: function () {
                    $(".fancybox-close, .fancybox-overlay").click(function (e) {
                        if (e.target !== e.currentTarget) {
                            return;
                        }
                        if (!exitFullscreen()) {
                            $.fancybox.close();
                            fancyOpen = false;
                        }
                    });
                }
            };

    $(document).on("webkitfullscreenchange mozfullscreenchange MSFullScreenChange fullscreenchange", function () {
        if (fancyOpen) {
            $.fancybox.close();
        } else {
            $.fancybox.open(fancyFiles, fancyOptions);
        }
        fancyOpen = !fancyOpen;
    });


    $("#fancyBoxOpener").click(function () {
        if (!requestFullscreen()) {
            $.fancybox.open(fancyFiles, fancyOptions);
            fancyOpen = true;
        }
    });

});
