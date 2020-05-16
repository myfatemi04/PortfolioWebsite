$(".gallery img").click(
    function() {
        let tab = window.open(this.getAttribute("src"), "_blank");
        tab.focus();
    }
);