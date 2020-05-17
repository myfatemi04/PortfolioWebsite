let lastOpen = new Date().getTime();

// opens the window popup
$(".gallery img").click(
    function(e) {
        let source = this.getAttribute("src");
        let alt = this.getAttribute("alt") || "Image";
        $(".imageWindow img").attr("src", source);
        $(".imageWindow #imageWindowAlt").html(alt);
        $(".imageWindow").show();
        lastOpen = new Date().getTime();
    }
);

let hideImageWindow = () => $(".imageWindow").hide();

// hides the image window if you click outside of the window
$("body").click(function(e) {
    // image window is visible and it has been at least 100ms
    if ($(".imageWindow").is(":visible") && (new Date().getTime() - lastOpen > 100)) {
        while (e.target != document.body && e.target) {
            if (e.target.classList.contains("imageWindow")) {
                break;
            }
            e.target = e.parentNode;
        }
        $(".imageWindow").hide();
    }
});