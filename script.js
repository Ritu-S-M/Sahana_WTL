/* scripts/main.js */
$(document).ready(function() {
    $("nav ul li a").on("click", function(event) {
        event.preventDefault();
        const target = $(this).attr("href");
        window.location.href = target;
    });
});
