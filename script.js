function submitRecommendation() {
    // Get the recommendation text
    var recommendationText = document.getElementById('recommendationText').value;

    // Display pop-up message
    var popup = document.getElementById('popup');
    popup.classList.remove('hidden');
}

function closePopup() {
    // Close the pop-up message
    var popup = document.getElementById('popup');
    popup.classList.add('hidden');
}
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.body.classList.add("scrollTop-show");
    } else {
        document.body.classList.remove("scrollTop-show");
    }
}


document.querySelector(".scroll-to-top").addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
});