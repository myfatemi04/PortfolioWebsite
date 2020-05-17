// opens the window popup
$(".gallery img").click(
    function() {
        let source = this.getAttribute("src");
        let alt = this.getAttribute("alt") || "Image";
        $(".imageWindow img").attr("src", source);
        $(".imageWindow #imageWindowAlt").html(alt);
        $(".imageWindow").show();
    }
);

let hideImageWindow = () => $(".imageWindow").hide();

// hides the image window if you click outside of the window
$("body").click(function(e) {
    // image window is visible
    if ($(".imageWindow").is(":visible")) {
        while (e.target != document.body) {
            if (e.target.classList.container("imageWindow")) {
                break;
            }
            e.target = e.parentNode;
        }
        $(".imageWindow").hide();
    }
});