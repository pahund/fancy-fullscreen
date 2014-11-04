$(document).ready(function() {
    var fancyOpen = false;

    $(document).on("webkitfullscreenchange mozfullscreenchange MSFullScreenChange fullscreenchange", function () {
        console.log("[PH_LOG] fullscreen change"); // PH_TODO: REMOVE
        if (fancyOpen) {
            $.fancybox.close();
        } else {
            $.fancybox.open([
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
            ], {
                afterShow: function () {
                    $(".fancybox-close, .fancybox-overlay").click(function () {
                        console.log("[PH_LOG] close"); // PH_TODO: REMOVE
                        var request = document.exitFullscreen
                            || document.webkitExitFullscreen
                            || document.mozCancelFullScreen
                            || document.msExitFullscreen;

                        if (typeof request !== 'undefined' && request) {
                            console.log("[PH_LOG] er ist defined"); // PH_TODO: REMOVE
                            request.call(document);
                        }
                    });
                }
            });
        }
        fancyOpen = !fancyOpen;
    });


    $("#fancyBoxOpener").click(function () {
        var docElement = document.documentElement,
            request;

        request = docElement.requestFullScreen
            || docElement.webkitRequestFullScreen
            || docElement.mozRequestFullScreen
            || docElement.msRequestFullScreen;

        if (typeof request !== "undefined" && request) {
            request.call(docElement);
        }


    });

});
