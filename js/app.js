function filter(selection) {
    let cards = document.getElementsByClassName('filterDiv');


    if (selection === 'all-btn') {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "flex"; // Mostrar todas las tarjetas
        }
        return;
    }


    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }


    let selectedCards = document.getElementsByClassName(selection);
    for (let i = 0; i < selectedCards.length; i++) {
        selectedCards[i].style.display = "flex"; 
    }
}


document.getElementById('html').onclick = function () { filter('html') };
document.getElementById('css').onclick = function () { filter('css') };
document.getElementById('python').onclick = function () { filter('python') };
document.getElementById('java').onclick = function () { filter('java') };
document.getElementById('all-btn').onclick = function () { filter('all-btn') };
