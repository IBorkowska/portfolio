document.addEventListener("DOMContentLoaded", function () {
    function fixOrphans() {
        document.querySelectorAll(".md-content p").forEach(function (p) {
            p.innerHTML = p.innerHTML.replace(/ (i|w|z|a|o|u) /g, " $1\u00A0");
        });
    }

    fixOrphans();

    // dla Material SPA navigation
    document.addEventListener("DOMContentSwitch", fixOrphans);
});